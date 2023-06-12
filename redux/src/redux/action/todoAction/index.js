function setCounterAction (value) {
    return {
      type: "setCounter",
      payload : value
    }
  }

  const nextCounterAction= ()=> {
    return {
        type : "next"
    }
  }


  export {
    setCounterAction,
    nextCounterAction
  }