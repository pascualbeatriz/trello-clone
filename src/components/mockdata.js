const mockData = {
  lists: {
    "01list": {
      id:"01list",
      title:"To Do",
      cards: [{
        id:"01card",
        title:"comprar lechuga"
      },
      {
        id:"02card",
        title:"comprar tomates"
      },
      {
        id:"03card",
        title:"comprar aceite"
      }
    ]
    },
    "02list": {
      id:"02list",
      title:"In progress",
      cards: []
    },
    listIds: ["01list","02list"]
  }
}

export default mockData