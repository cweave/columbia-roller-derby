import React, { useEffect, useState } from "react"
import { Table, Column, Input, Button, Space } from "antd"
import "antd/dist/antd.css"

const DerbyTable = (rookies) => {
  const [skaterData, setSkaterData] = useState([])
  useEffect(() => {
    const rookieData = Object.entries(rookies).map(([key, val]) => {
      return val.map((k) => ({ key: k.node.id, ...k.node }))
    })
    setSkaterData(...rookieData)
    console.log("useeffect", rookieData)
  }, [rookies])

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Derby Name",
      dataIndex: "derby_name",
      key: "derbyName",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Street Address",
      dataIndex: "street_address",
      key: "streetAddress",
    },
    {
      title: "city",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "state",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Zip Code",
      dataIndex: "zip_cSode",
      key: "zipCode",
    },
    {
      title: "county",
      dataIndex: "county",
      key: "county",
    },
    {
      title: "birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Member Status",
      dataIndex: "skater_type",
      key: "memberStatus",
    },
    {
      title: "Yearly Waiver Status",
      dataIndex: "yearly_waiver_status",
      key: "yearlyWaiverStatus",
    },
  ]

  return (
    <div className="book-container">
      <Table columns={columns} dataSource={skaterData} />
    </div>
  )
}

export default DerbyTable
