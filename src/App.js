import "./App.css";
import { Button, Form, Input, Select, Space } from "antd";

function App() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", margin: "0 0 2rem 0" }}>
        <h5
          style={{
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.1px",
          }}
          className="responsive"
        >
          Contact Us
        </h5>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "57px",
            letterSpacing: "0.2px",
          }}
          className="responsive"
        >
          Make an Appointment
        </h2>
        <h3
          style={{
            fontSize: "24px",
            fontHeight: "700",
            lineHeight: "32px",
          }}
          className="mobile"
        >
          Book Appointment
        </h3>
      </div>
      <Form name="complex-form" onFinish={onFinish}>
        <Space className="formStyle">
          <Space className="lineComponent">
            <Form.Item
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Full Name is required",
                },
              ]}
            >
              <p
                className="mobile"
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  LineHeight: "24px",
                }}
              >
                Name *
              </p>
              <Input
                style={{ width: "255px", height: "50px", borderRadius: "5px" }}
                placeholder="Full Name*"
              />
            </Form.Item>

            {/* <Form.Item label="Address"> */}
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Email is required",
                },
              ]}
            >
              <p
                className="mobile"
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  LineHeight: "24px",
                }}
              >
                Email *{" "}
              </p>
              <Input
                style={{ width: "255px", height: "50px", borderRadius: "5px" }}
                placeholder="Email*"
              />
            </Form.Item>
            {/* </Form.Item> */}
          </Space>

          <Space className="lineComponent">
            {/* <Form.Item label="Address"> */}
            <Form.Item
              name="depart"
              rules={[
                {
                  required: true,
                  message: "Department is required",
                },
                // {
                //   required: true,
                //   type: "email",
                //   message: "Please Fill Correct Email",
                // },
              ]}
            >
              <p
                className="mobile"
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  LineHeight: "24px",
                }}
              >
                Department *{" "}
              </p>
              <Select
                // defaultValue="lucy"
                style={{ width: "255px", height: "50px", borderRadius: "5px" }}
                placeholder="Please Select"
                onChange={() => {}}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                ]}
              />
            </Form.Item>
            {/* </Form.Item> */}

            {/* <Form.Item label="Username"> */}
            <Form.Item
              name="time"
              rules={[
                {
                  required: true,
                  message: "TIme is required",
                },
              ]}
            >
              <p
                className="mobile"
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  LineHeight: "24px",
                }}
              >
                Time *{" "}
              </p>
              <Select
                defaultValue="4:00 Available"
                style={{ width: "255px", height: "50px", borderRadius: "5px" }}
                placeholder="Time"
                onChange={() => {}}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                ]}
              />
            </Form.Item>
            {/* </Form.Item> */}
          </Space>

          <div className="lineComponent">
            <Form.Item label=" " colon={false}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#23A6F0",
                  height: "58px",
                  width: "218px",
                }}
              >
                Book Appointment
              </Button>
            </Form.Item>
          </div>
        </Space>
      </Form>
    </section>
  );
}

export default App;
