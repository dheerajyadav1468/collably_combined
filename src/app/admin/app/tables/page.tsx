import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TableOne from "../../components/Tables/TableOne";
import TableThree from "../../components/Tables/TableThree";
import TableTwo from "../../components/Tables/TableTwo";
import React from "react"
import { Metadata } from "next";
import DefaultLayout from "../../components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Collably Tables Page | Collably - Collably Dashboard Kit",
  description: "This is Collably Tables page for Collably Dashboard Kit",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
