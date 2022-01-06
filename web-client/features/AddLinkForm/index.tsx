import { FC, useState } from "react";
import { Form, Input, Button, DatePicker, Select, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import { upsertReminder } from "../../access/reminders";
import { Reminder } from "../../access/models/Reminder";
import { Timestamp } from "firebase/firestore";

enum Recurrence {
  OneTime = "One Time",
  Weekly = "Weekly",
  Monthly = "Monthly",
  Yearly = "Yearly",
}

interface FormData {
  email: string;
  link: string;
  category: string;
  recurrence: Recurrence;
  remindDate: moment.Moment;
}

export const LinkForm: FC = () => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  const addNewCategory = () => {
    setCategories([...categories, newCategoryName]);
  };
  const submit = async (values: FormData) => {
    console.log(values);
    const data: Reminder = {
      email: values.email,
      link: {
        value: encodeURIComponent(values.link),
        category: values.category,
        remindDatetime: Timestamp.fromDate(values.remindDate.toDate()),
        recurrence: values.recurrence,
      },
    };

    await upsertReminder(data);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={submit}
      onFinishFailed={() => null}
      autoComplete="on"
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { type: "email", required: true, message: "Please enter an email." },
        ]}
        wrapperCol={{ span: 16 }}
      >
        <Input placeholder="Email" size="large" />
      </Form.Item>
      <Form.Item
        label="Link"
        name="link"
        rules={[{ required: true, message: "Please enter a url." }]}
        wrapperCol={{ span: 16 }}
      >
        <Input placeholder="Link" size="large" />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
            message: "Please choose or create a category for this link.",
          },
        ]}
      >
        <Select
          style={{ width: 240 }}
          placeholder="Select a category"
          dropdownRender={(menu) => (
            <div>
              {menu}
              <Divider style={{ margin: "4px 0" }} />
              <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
                <Input
                  style={{ flex: "auto" }}
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <a
                  style={{
                    flex: "none",
                    padding: "8px",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={addNewCategory}
                >
                  <PlusOutlined /> Add
                </a>
              </div>
            </div>
          )}
        >
          {categories.map((item, ix) => (
            <Select.Option key={item}>{item}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Remind Date"
        name="remindDate"
        rules={[{ required: true, message: "Please enter a date." }]}
        wrapperCol={{ span: 11 }}
      >
        <DatePicker
          showTime={{ format: "HH:mm" }}
          format="MM/DD/YYYY HH:mm"
          size="large"
          minuteStep={5}
          use12Hours={true}
        />
      </Form.Item>
      <Form.Item
        label="Recurrence"
        name="recurrence"
        rules={[{ required: true, message: "Please choose." }]}
        wrapperCol={{ span: 11 }}
      >
        <Select defaultValue={Recurrence.OneTime} size="large">
          <Select.Option value={Recurrence.OneTime}>
            {Recurrence.OneTime}
          </Select.Option>
          <Select.Option value={Recurrence.Weekly}>
            {Recurrence.Weekly}
          </Select.Option>
          <Select.Option value={Recurrence.Monthly}>
            {Recurrence.Monthly}
          </Select.Option>
          <Select.Option value={Recurrence.Yearly}>
            {Recurrence.Yearly}
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
