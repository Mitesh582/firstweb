import './App.css';

function App() {
  var data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    },{
      id: 106,
      name: 'Cummeloxi',
      quantity: 88,
      price: 350,
      expiry: 2026,
      status: true
    }
  ];

  // return (
  //   <table align="center" border="1" cellPadding="0" cellSpacing="2" width="1080" >
  //     <tr align="center">
  //       <td>id</td>
  //       <td>name</td>
  //       <td>quantity</td>
  //       <td>price</td>
  //       <td>expiry</td>
  //       <td>status</td>
  //     </tr>

  //     {
  //       data.map((d) => 
  //         <tr align="center">
  //           <td>{d.id}</td>
  //           <td>{d.name}</td>
  //           <td>{d.quantity}</td>
  //           <td>{d.price}</td>
  //           <td>{d.expiry}</td>
  //           <td>{d.status.toString()}</td>
  //         </tr>
  //       )
  //     }
  //   </table>
  // )

  return (
    <div className='card'>
      {
        data.map((d) => {
          return (
            <div className='card-items'>
              <h3>{d.id}</h3>
              <h3>{d.name}</h3>
              <h3>{d.quantity}</h3>
              <h3>{d.price}</h3>
              <h3>{d.expiry}</h3>
              <h3>{d.status.toString()}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
