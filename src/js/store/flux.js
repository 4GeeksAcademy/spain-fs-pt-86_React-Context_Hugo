import { editContact } from "../views/edit-contact";



const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			ContacList: [],
			traerContactos: async () => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/Hvaxquez/contacts/')
					console.log(Response);
					if(!response.ok) {
						getActions().crearContacto()
						return
					}
					const data = await response.json()
					setStore({contacts: data.contacts})
					console.log(data);
			}, 
			

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			get: async() => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/Hvaxquez/contacts');
				const data = await response.json();
				setStore({ContacList: data.contacts})
				//return contacts;
			},
			 
			
			addContact: async (name, phone, email, address) => {
				const response = await fetch ('https://playground.4geeks.com/contact/agendas/Hvaxquez/contacts', {
					method: "POST",
					body: JSON.stringify({name,phone,email,address}),
					headers: {
					  "Content-Type": "application/json"
					}
				  })
                const data = await response.json()
				getActions().get()
				console.log(data)
  


			},

			editContact: async (newContact, id) => {
				const response = await fetch (`https://playground.4geeks.com/contact/agendas/Hvaxquez/contacts/${id}`,
					{method:"PUT",body: JSON.stringify(newContact),
					headers: {
					  "Content-Type": "application/json"
					}
				}
				)
				const data = await response.json()
				getActions().get()
				console.log(data)

			},

			elimContact: async (id) => {
				await fetch (`https://playground.4geeks.com/contact/agendas/Hvaxquez/contacts/${id}`,
					{method: "DELETE",headers: {
						"Content-Type": "application/json"
					  }}
				 )
				 getActions().get()
			}


		}
	};
};

export default getState;
