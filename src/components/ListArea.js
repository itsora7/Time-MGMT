import React from 'react'

export const ListArea = () => {
  return (
<div className="row mt-5 g-2">
    <div className="col-md">
        <h2 className="text-center">Entry List</h2>
        <hr />
        <table className="table table-striped table-hover">
            <tbody id="task-list">
                             
            </tbody>
          </table>
    </div>
    <div className="col-md">
        <h2 className="text-center">Bad List</h2>
        <hr />
        <table className="table table-striped table-hover">
            <tbody id="bad-task">
              {/* <!-- <tr>
                <th scope="row">1</th>
                <td>Watching TV</td>
                <td>50</td>
                <td>
                    <button className="btn btn-warning"><i className="fa-solid fa-left-long"></i></button>
                    <button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                    
                </td>
            </tr>                        
              <tr>
                <th scope="row">1</th>
                <td>Watching TV</td>
                <td>50</td>
                <td className="text-end">
                    <button className="btn btn-warning"><i className="fa-solid fa-left-long"></i></button>
                    <button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                    
                </td>
            </tr>                        
              <tr>
                <th scope="row">1</th>
                <td>Watching TV</td>
                <td>50</td>
                <td>
                    <button className="btn btn-warning"><i className="fa-solid fa-left-long"></i></button>
                    <button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                    
                </td>
            </tr>                        
              <tr>
                <th scope="row">1</th>
                <td>Watching TV</td>
                <td>50</td>
                <td>
                    <button className="btn btn-warning"><i className="fa-solid fa-left-long"></i></button>
                    <button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                    
                </td>
            </tr>                         --> */}
            </tbody>
          </table>
          <div className="text-end">You could have saved = <span id="totalBadhr">0</span>hrs</div>
    </div>
</div>  )
}
