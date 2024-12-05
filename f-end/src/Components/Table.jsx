import React from "react";

const Table = ({ data }) => {
  const reversedData = [...data].reverse();

  return (
    <>
      <table className="table table-hover">
        <colgroup>
          <col style={{ width: "20%" }} /> {/* Name column */}
          <col style={{ width: "30%" }} /> {/* Email column */}
          <col style={{ width: "50%" }} /> {/* Message column */}
        </colgroup>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        
        <tbody>
          {reversedData && reversedData.length > 0 ? ( // Check if data exists and is not empty
            reversedData.map((item, index) => (
              <tr key={index}>
                {" "}
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Data Available</td>{" "}
              {/* Fallback for no data */}
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
