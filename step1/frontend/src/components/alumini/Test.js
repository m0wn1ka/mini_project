function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }

export default function Test(){
    
let a={ name: "radh", branch: "cse", "year of passowut": "2025" }
    const listItems=Object.keys(a).map(x=>
        <li>
            {x}:{a[x]}

        </li>
        )


    return(
        <>
        hi
        <Card>
        <li>
            {listItems}
        </li>
        </Card>
        </>
    )
    }
