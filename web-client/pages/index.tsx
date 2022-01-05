import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "./firebase";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import { Input, Button, Layout, Form } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import { addLink } from "./access/links";
import { Link } from "./models/Link";

const Home: NextPage = () => {
  const submit = async (values: any) => {
    console.log(values);
    await addLink(values as Link);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Content style={{ margin: "5% 0" }}>
          <div className={styles.formContainer}>
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={submit}
              onFinishFailed={() => null}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter an email." }]}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>
              <Form.Item
                label="Link"
                name="link"
                rules={[{ required: true, message: "Please enter a url." }]}
              >
                <Input placeholder="Link" size="large" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
