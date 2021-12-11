import React from "react"
import { Form, Select, InputNumber, Input, Button, Upload, Space } from "antd"
import { Row, Col } from "antd"
import "antd/dist/antd.css"

const { Option } = Select

const NewSkaterForm = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values)
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
			<Row>
				<Col span={8}>
					<Form.Item
						name="name"
						label="Name"
						rules={[{ required: true, message: "Name is required" }]}
					>
						<Input placeholder="Your name" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item name="derbyName" label="Derby Name">
						<Input placeholder="Derby Name" />
					</Form.Item>
				</Col>
				<Col span={4}>
					<Form.Item name="number" label="Derby Number">
						<Input placeholder="Derby Number" />
					</Form.Item>
				</Col>
				<Col span={4}>
					<Form.Item
						name="skateType"
						label="Skater Type"
						rules={[{ required: true, message: "Skater type is required" }]}
					>
						<Select placeholder="Select Skater Type">
							<Option value="Rookie">Rookie</Option>
							<Option value="Transfer">Transfer</Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col span={10}>
					<Form.Item
						name="street_address"
						label="Street Address"
						rules={[{ required: true, message: "Address is required" }]}
					>
						<Input placeholder="Please input" />
					</Form.Item>
				</Col>
				<Col span={4}>
					<Form.Item
						name="state"
						label="State"
						rules={[{ required: true, message: "State is required" }]}
					>
						<Select placeholder="Select state">
							{states.map((state) => (
								<Option value={state}>{state}</Option>
							))}
						</Select>
					</Form.Item>
				</Col>
				<Col span={4}>
					<Form.Item
						name="zipCode"
						label="Zip Code"
						rules={[{ required: true, message: "Zip Code is required" }]}
					>
						<Input placeholder="Please input" />
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item
						name="county"
						label="County"
						rules={[{ required: true, message: "Zip Code is required" }]}
					>
						<Input placeholder="Please input" />
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col span={8}>
					<Form.Item name="phone" label="Phone">
						<Input placeholder="Please input" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item name="email" label="Email">
						<Input placeholder="Please input" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item name="birthday" label="Birthday">
						<Input placeholder="Input birth year" />
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col span={24}>
					<Form.Item label=" " colon={false}>
						<Button type="primary" htmlType="submit">
							Submit
            </Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	)
}

export default NewSkaterForm
