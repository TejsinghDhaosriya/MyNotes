
const url ='http://127.0.0.1:8000/api/v1/notes/';

export const fetchNotes=async()=>{
    return fetch(url,{
        method:'GET',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('............',data)
        return data
    })
}

export const fetchNote=(id)=>{
    return fetch(`${url +id}`,{})
     .then(res=>res.json())
     .then(data=>{
       return data;
     })

    }


export const addNote =(note)=>{
    fetch(url,{
        method :'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body:JSON.stringify(note)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('..............post.............',data)
    })
    return note;
}


export const updateNote=(note)=>{
    console.log('we are updating');
    console.log('update a note with id',note.id)
}