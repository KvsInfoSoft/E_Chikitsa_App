/* eslint-disable no-debugger */
import { DownloadOutlined, RedoOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Select, Table, /* Space, Input,*/ notification } from 'antd';
import { useEffect, useRef, useState } from 'react';
// import Highlighter from 'react-syntax-highlighter';
import { useReactToPrint } from 'react-to-print';
// eslint-disable-next-line no-unused-vars
import reportService from '../../services/reports/royaltyCardReport/royaltyCardMemberReportsService';
// import tableCss from '../../utils/table.css';
// eslint-disable-next-line no-empty-pattern
function RoyaltyMemberReports({}) {
  const [royaltyCardReportsServices] = useState(() => new reportService());
  const [listState, setListSate] = useState();
  const [loading, setLoading] = useState(false);
  var auth = JSON.parse(sessionStorage.getItem('token-info'));
  const [form] = Form.useForm();
  const componentpdf = useRef();
  const inputReset = useRef(null);
  const [drpUser, setdrpCardValue] = useState([]);
  const [showDrp, setShowdrp] = useState(false);
  const [inputs, setInputs] = useState({});
  const [api, contextHolder] = notification.useNotification();

  // npm install react-to-print

  const openNotification = (title, message) => {
    api.info({
      message: title,
      description: message
    });
  };

  const genratePDF = useReactToPrint({
    content: () => componentpdf.current,
    documentTitle: 'Royalty card member detail',
    onAfterPrint: () => openNotification('ROYALTY CARD MEMBER REPORTS', 'PDF Generated successfully!')
  });

  useEffect(() => {
    let param = {
      dateTo: '',
      dateFrom: '',
      userBy: auth.User
    };

    royaltyCardMemberReportUserBy(param);
    if (auth.User.toLowerCase() === 'admin') {
      setShowdrp(true);
      allUserDetail();
    }
  }, []);

  const handleSubmit = () => {
    debugger;
    let param = {
      dateTo: inputs.dateTo ? inputs.dateTo : '',
      dateFrom: inputs.dateFrom ? inputs.dateFrom : '',
      userBy: inputs.userBy ? inputs.userBy : auth.User
    };
    royaltyCardMemberReport(param);
  };

  const handleUserDrp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const getColumns = [
    {
      title: 'Royalty Card No',
      dataIndex: 'royaltyCardNo'
      // align: 'center',
      // width: 50
    },
    {
      title: 'IssueDate',
      dataIndex: 'issueDate'
      // align: 'center',
      // width: 450
    },
    {
      title: 'CardExpiryDate',
      dataIndex: 'cardExpiryDate',
      // align: 'center',
      width: 150
    },
    {
      title: 'CustomerName',
      dataIndex: 'customerName',
      align: 'center'
      // width: 50
    },
    {
      title: 'Mobile No',
      dataIndex: 'mobileNo',
      align: 'center'
      // width: 50
    },
    {
      title: 'Aadhar No',
      dataIndex: 'aadharNo',
      align: 'center'
      // width: 50
    },
    {
      title: 'DateofBirth',
      dataIndex: 'dateofBirth',
      align: 'center'
      // width: 50
    },
    {
      title: 'Address',
      dataIndex: 'address',
      align: 'center'
      // width: 50
    },
    {
      title: 'CardCategory',
      dataIndex: 'cardCategory',
      align: 'left',
      width: 2000
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      align: 'center'
      // width: 50
    },
    {
      title: 'Year',
      dataIndex: 'year',
      align: 'center'
      // width: 50
    },
    {
      title: 'PaymentMode',
      dataIndex: 'paymentMode',
      align: 'center'
      // width: 50
    },
    {
      title: 'Transaction No',
      dataIndex: 'transactionNo',
      align: 'center'
      // width: 50
    }
  ];

  const resetFilter = () => {
    inputs.dateTo = null;
    inputs.dateFrom = null;
    let param = {
      dateTo: '',
      dateFrom: '',
      userBy: auth.User
    };
    royaltyCardMemberReportUserBy(param);
  };
  const royaltyCardMemberReport = (param) => {
    setLoading(true);
    royaltyCardReportsServices.getRoyaltyCardMemberReports(param).then((response) => {
      try {
        if (response.data.statusCode == 200) {
          setListSate(response.data.data);
          setLoading(false);
        } else {
          openNotification('ROYALTY CARD MEMBER REPORTS', response.data.message);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  };
  const royaltyCardMemberReportUserBy = (param) => {
    setLoading(true);
    royaltyCardReportsServices.getRoyaltyCardMemberReportsUserBy(param).then((response) => {
      try {
        if (response.data.statusCode == 200) {
          setListSate(response.data.data);
          setLoading(false);
        } else {
          openNotification('ROYALTY CARD MEMBER REPORTS', response.data.message);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  };

  const allUserDetail = () => {
    royaltyCardReportsServices.getAllUserDetail().then((response) => {
      try {
        if (response.data.statusCode == 200) {
          setdrpCardValue(response.data.data);
        } else {
          console.log(response.data);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  };

  return (
    <>
      {contextHolder}
      <Form form={form} name="horizontal" layout="inline">
        <Form.Item label="Date To" ref={inputReset}>
          <DatePicker
            value={inputs.dateTo ? inputs.dateTo : null}
            onChange={(dateString) => {
              setInputs((input) => ({ ...input, dateTo: dateString }));
            }}
          />
        </Form.Item>
        <Form.Item label="Date From">
          <DatePicker
            value={inputs.dateFrom ? inputs.dateFrom : null}
            onChange={(dateString) => {
              setInputs((input) => ({ ...input, dateFrom: dateString }));
            }}
          />
        </Form.Item>
        {showDrp ? (
          <Form.Item label="Select user">
            <Select ref={inputReset} placeholder="Select user" onChange={(e) => handleUserDrp({ target: { name: 'userBy', value: e } })}>
              {drpUser.map((option) => (
                <option key={option.vno} value={option.userName}>
                  {option.userName}
                </option>
              ))}
            </Select>
          </Form.Item>
        ) : (
          <></>
        )}

        <Form.Item>
          <Button type="primary" key="search" onClick={handleSubmit}>
            <SearchOutlined />
            Search
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="default" key="reset" onClick={resetFilter}>
            <RedoOutlined />
            Reset
          </Button>
        </Form.Item>
        <Form.Item>
          <DownloadOutlined onClick={genratePDF} />
        </Form.Item>
      </Form>

      <div ref={componentpdf}>
        <Table
          dataSource={listState}
          columns={getColumns}
          pagination={false}
          // pagination={{ pageSize: 5 }}
          loading={loading}
          mobileBreakPoint={768}
          // scroll={{
          //   x: 2000,
          //   y: 400
          // }}
        />
      </div>
    </>
  );
}

export default RoyaltyMemberReports;
