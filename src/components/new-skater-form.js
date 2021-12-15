import React from "react"
import { Form, Select, InputNumber, Input, Button, Upload, Space } from "antd"
import { Row, Col } from "antd"
import "antd/dist/antd.css"
import "../styles/form.scss"

const { Option } = Select

const NewSkaterForm = () => {
  console.log(process.env.NODE_ENV)
  const onFinish = (values) => {
    const url =
      process.env.NODE_ENV === "development" ? "http://localhost:3001" : ""
    console.log("Received values of form: ", values)
    const formData = {
      name: `${values.last_name}, ${values.first_name}`,
      derby_name: values.derby_name,
      number: values.number,
      skater_type: values.skater_type,
      email: values.email,
      phone: values.phone,
      street_address: values.street_address,
      city: values.city,
      state: values.state,
      county: values.county,
      birthday: values.birthday,
      zip_code: values.zip_code,
    }
    console.log("formData", formData)
    fetch(`${url}/api/insert/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
  }

  const states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ]

  return (
    <Form name="complex-form" layout="vertical" onFinish={onFinish}>
      <div className="form-row">
        <div className="form-col">
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[{ required: true, message: "First name is required" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </div>
        <div className="form-col">
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[{ required: true, message: "Last name is required" }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </div>
      </div>
      <div className="form-row">
        <div className="form-col">
          <Form.Item
            name="skater_type"
            label="Skater Type"
            rules={[{ required: true, message: "Skater type is required" }]}
          >
            <Select placeholder="Select Skater Type">
              <Option value="Rookie">Rookie</Option>
              <Option value="Transfer">Transfer</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="form-col">
          <Form.Item name="derby_name" label="Derby Name">
            <Input placeholder="Derby Name" />
          </Form.Item>
        </div>
        <div className="form-col">
          <Form.Item name="number" label="Derby Number">
            <Input placeholder="Derby Number" />
          </Form.Item>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col span-4">
          <Form.Item
            name="street_address"
            label="Street Address"
            rules={[{ required: true, message: "Address is required" }]}
          >
            <Input placeholder="Please input" />
          </Form.Item>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: "City is required" }]}
          >
            <Input placeholder="Please input" />
          </Form.Item>
        </div>
        <div className="form-col">
          <Form.Item
            name="state"
            label="State"
            rules={[{ required: true, message: "State is required" }]}
          >
            <Select placeholder="Select state">
              {states.map((state) => (
                <Option key={state} value={state}>
                  {state}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className="form-col">
          <Form.Item
            name="zip_code"
            label="Zip Code"
            rules={[{ required: true, message: "Zip Code is required" }]}
          >
            <Input placeholder="Please input" />
          </Form.Item>
        </div>
        <div className="form-col">
          <Form.Item
            name="county"
            label="County"
            rules={[{ required: true, message: "Zip Code is required" }]}
          >
            <Input placeholder="Please input" />
          </Form.Item>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <Form.Item name="phone" label="Phone">
            <Input placeholder="Please input" />
          </Form.Item>
        </div>
        <div className="form-col">
          <Form.Item name="email" label="Email">
            <Input placeholder="Please input" />
          </Form.Item>
        </div>
        <div className="form-col">
          <Form.Item name="birthday" label="Birthday">
            <Input placeholder="Input birth year" />
          </Form.Item>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  )
}

export default NewSkaterForm
