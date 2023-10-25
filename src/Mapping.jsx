

const Mapping = () => {
    const users = [
        {
            firstName:'Abdullahi',
            email: "bucky@gmail.com",
            personalID: '12131245452'
        },
        {
            firstName:'Abdullahi',
            email: "covi@gmail.com",
            personalID: '12131245452'
        },
        {
            firstName:'AbduQCllahi',
            email: "abdullag@gmail.com",
            personalID: '12131245452'
        },
        {
            firstName:'AbdullahQWi',
            email: "ao@gmail.com",
            personalID: '121312SD45452'
        },
        {
            firstName:'Chris',
            email: "chris@gmail.com",
            personalID: '121312SD45452'
        },
    ];
  return (

   <div>
    <table border={1}>
        <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Personal ID</th>
        </tr>

    {
        users.map((user, i) =>{
            return(
                <tbody key={i}>
                    <tr>
                        <td>{i + 1}</td>
                        <td>{user.email}</td>
                        <td>{user.firstName}</td>
                        <td>{user.personalID}</td>
                    </tr>
                </tbody>   
            )
        })
    }
    </table>
   </div>
    
  )
}

export default Mapping