const getLocalData =()=>
{
  const storedListStr = localStorage.getItem('read-list')
  if(storedListStr)
  {
     const storedList = JSON.parse(storedListStr)
     return storedList;
  }
  else
  {
    return [];
  }
}

const addToStoredReadList =(id)=>
{
    const storedList = getLocalData()
    if(storedList.includes(id))
    {
        alert('already added')
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list' , storedListStr);
    }
}

export {addToStoredReadList}