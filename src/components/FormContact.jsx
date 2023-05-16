import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormContact = () => {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState("");

  const postMessage = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`http://localhost:3000/posts`, {
        email: email,
        name: name,
        message: messages,
      });
      if (result) {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white">
      <h2 className="text-4xl mb-4 text-center">Contact me</h2>
      <Form
        onSubmit={postMessage}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
        className="mx-auto"
      >
        <Form.Item
          className="text-white mt-5"
          name={["name"]}
          label={<label style={{ color: "white" }}>Name</label>}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          name={["email"]}
          label={<label style={{ color: "white" }}>Email</label>}
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item
          name={["Message"]}
          label={<label style={{ color: "white" }}>Message</label>}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea onChange={(e) => setMessages(e.target.value)} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button className="text-white" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormContact;
