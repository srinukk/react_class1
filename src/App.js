



const Hello = ()=>{
const employees=[
  {
    name:"srinu",
    role:"full stack developer",
    salary:100000
  },
  {
    name:"uday",
    role:"data base developer",
    salary:150000
  },
  {
    name:"shekar",
    role:"react  developer",
    salary:200000
  },
  {
    name:"bharath",
    role:"back end developer",
    salary:250000
  }
]
return(
  <>
  {
    employees.map((eachemployee,index)=>{
      const {name,role,salary}=eachemployee
      return(
        <div>
          <h1>{index+1}</h1>
          <h1>{name}</h1>
          <h2>{role}</h2>
          <h3>{salary}</h3>
        </div>
      )
    })
  }
  </>
)
}
export default Hello