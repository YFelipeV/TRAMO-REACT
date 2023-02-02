function ConductoresCards({ data }) {
  return (
    <>
      {data.map((lista,index) => (
        <>
        
          <tr key={index}>
            <td>
              <div className="d-flex justify-content-center">
                <img
                  src={lista.image}
                  className="rounded-circle"
                  width="90px"
                ></img>
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.name}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <span className="font-weight-bold text-xs font-weight-bold">
                {lista.id}20 769 9910
              </span>
            </td>
            <td className="text-center align-middle text-sm">
              <i className="bi bi-star me-1 fs-5 "></i>
              <i className="bi bi-star me-1 fs-5"></i>
              <i className="bi bi-star me-1 fs-5"></i>
              <i className="bi bi-star me-1 fs-5" style={{ width: "10%" }}></i>
              <i className="bi bi-star me-1 fs-5"></i>
            </td>
            <td className="text-center align-middle">
              <span className="badge badge-sm bg-primary  ">
                {lista.status}
              </span>
            </td>
          </tr>
          <tr></tr>
        </>
      ))}
    </>
  );
}

export default ConductoresCards;
