import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Table.css";

type Person = {
  _id: string;
  name: string;
  dob: string;
  email: string;
  verified: boolean;
  salary: number;
};

interface TableProps {
  data: Person[];
}

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;
const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

const Table = ({ data }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [selectedPerson, setSelectedPerson] = useState<any | null>(null);
  const [recordsPerPage, setRecordsPerPage] = useState(DEFAULT_PAGE_SIZE);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const totalPages = Math.ceil(data.length / recordsPerPage);

  const sortedData = [...data].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (sortOrder === "asc") {
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    } else {
      return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
    }
  });

  const startIndex = (currentPage - 1) * recordsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + recordsPerPage);

  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
          <th>
              <button onClick={handleSort} className="name-sort" aria-sort={sortOrder === "asc" ? "ascending" : "descending"}>
                Name {sortOrder === "asc" ? "↑" : "↓"}
              </button>
            </th>
            <th>DOB</th>
            <th>Email</th>
            <th>Verified</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((person) => (
            <tr key={person._id}>
              <td
                className="clickable"
                onClick={() => setSelectedPerson(person)}
              >
                {person.name}
              </td>
              <td>{person.dob}</td>
              <td>{person.email}</td>
              <td>{person.verified ? "Yes" : "No"}</td>
              <td>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(person.salary)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-controls">
        {/* Previous Button */}
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className=""
          >
            Prev
          </button>
        </div>

        {/* Page Number */}
        <div>
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>

        {/* Next Button */}
        <div>
          <button
            disabled={startIndex + recordsPerPage >= data.length}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>

        {/* Row Size */}
        <div className="page-size-selector">
          <label>Rows per page: </label>
          <select
            value={recordsPerPage}
            onChange={(e) => {
              setRecordsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
      {selectedPerson && (
        <Modal
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
        />
      )}
    </div>
  );
};

export default Table;
