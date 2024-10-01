import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <Link href='admin/board'> Board </Link>
    </div>
  );
};

export default Admin;
