


const List =(prop) =>{
    console.log(prop)
    const {list} = prop

    return(
        <ol>
      {
        list.map((each) => {
            return(
                <>
                <li>{each}</li>
                </>
            )
        })
      }
      

        </ol>
    )
}
export default List