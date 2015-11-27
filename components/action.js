exports.AddItem = (text) => {
  return {
    type: 'ADD_ITEM',
    text
  }
}

exports.ChangeStatus = (index, status) => {
  return {
    type: 'CHANGE_STATUS',
    index,
    status
  }
}