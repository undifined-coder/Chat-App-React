import user from '../reducer/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Priyanshu",
      image:user.image,
      
        // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FChris-Hemsworth&psig=AOvVaw3feODZUGhHxppLpg2-K0Ya&ust=1687798795001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjy39Ly3v8CFQAAAAAdAAAAABAE",
      contacts: [
        {
          id: 2,
          name: "Prince",
          image:
            "https://randomuser.me/api/portraits/men/86.jpg",
          chatlog: [
            {
              text: "Hi Bro!",
              timestamp: "11:21 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi Prince. How are you!",
              timestamp: "11:22 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Priyanshu.",
              timestamp: "11:25 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "11:26 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Ok",
              timestamp: "11:30 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Sachin",
          image:"https://randomuser.me/api/portraits/men/58.jpg",
          chatlog: [
            {
              text: "Hi !",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Sachin , How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
          
            {
              text: "Where r u ??",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "I am at my home right now",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
          ],
        },
        {
          id: 4,
          name: "Raj",
          image:
            "https://randomuser.me/api/portraits/men/48.jpg",
          chatlog: [],
        },
        {
          id: 5,
          name: "Margot",
          image:
            "https://randomuser.me/api/portraits/women/11.jpg",
          chatlog: [
            {
              text: "Hi, Priyanshu!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine margot. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Priyanshu.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy in something??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Yes, i will talk you later",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 6,
          name: "Chris",
          image:
            "https://randomuser.me/api/portraits/men/42.jpg",
          chatlog: [
            {
              text: "Hey Pri, where is ur pet?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know anything about that, bro",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure,  Pri?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes,  I am sure",
              timestamp: "10:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "ok bye Chris...",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Robert",
          image:
            "https://randomuser.me/api/portraits/men/79.jpg",
          chatlog: [
            {
              text: "Where are you bro ? ",
              timestamp: "10:06 AM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market",
              timestamp: "10:06 AM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ....",
              timestamp: "10:07 AM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "10:08 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "R u okay??",
              timestamp: "10:09 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "yes",
              timestamp: "10:09 AM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Kriti",
          image:"https://randomuser.me/api/portraits/women/15.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Keshav",
          image:
            "https://randomuser.me/api/portraits/men/56.jpg",
          chatlog: [],
        },
      ],
    },
  };

  /* id: 4,
          name: "Margot",
          image:
            "https://randomuser.me/api/portraits/women/11.jpg",
          chatlog: [
            {
              text: "Hi, Priyanshu!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine margot. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Priyanshu.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Yes, i will talk yo u later",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ], */