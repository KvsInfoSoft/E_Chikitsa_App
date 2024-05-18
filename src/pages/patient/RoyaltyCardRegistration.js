/* eslint-disable no-debugger */
import React from 'react';
import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker, Select, Radio, QRCode, notification } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleFilled } from '@ant-design/icons';
import RoyaltyCardMemberService from '../../services/royalCard/royaCardRegistration.services';
import dayjs from 'dayjs';
const { TextArea } = Input;
const { Option } = Select;
// eslint-disable-next-line no-empty-pattern
function RoyaltyCardRegistration({}) {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue={'+91'} onChange={(e) => setSelectedSize(e.target.value)}>
        <Option value={'+91'}>+91</Option>
      </Select>
    </Form.Item>
  );
  const [api, contextHolder] = notification.useNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Show, setShow] = useState(false);
  const [listState, setListSate] = useState();
  const [drpCard, setdrpCardValue] = useState([]);
  const [inputs, setInputs] = useState({});
  const [btnChanges, setbtnChnage] = useState(0);
  const dateFormat = 'YYYY-MM-DD';
  const [royalMemberServices] = useState(() => new RoyaltyCardMemberService());
  const [checked, setChecked] = useState(0);
  const [year1, setyear1] = useState(0);
  const [year2, setyear2] = useState(1);
  const [year5, setyear5] = useState(2);
  const [loading, setLoading] = useState(false);
  const [lblValue, setlblValue] = useState();
  const [currentDate, setCurrentDate] = useState();
  var auth = JSON.parse(sessionStorage.getItem('token-info'));
  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    setCurrentDate(`${year}-0${month}-${date}`);
  };
  const handleEdit = (data) => {
    setbtnChnage(1);
    setInputs({
      ...data
    });
    {
      data.paymentMode === 2 ? setShow(true) : setShow(false);
    }

    if (data.cardYear != null) {
      if (data.cardYear === 1) {
        setChecked(year1);
        setlblValue(data.cardAmount);
      } else if (data.cardYear === 2) {
        setChecked(year2);
        setlblValue(data.cardAmount);
      } else if (data.cardYear === 5) {
        setChecked(year5);
        setlblValue(data.cardAmount);
      }
    }
    showModal();
  };
  const openNotification = (title, message) => {
    api.info({
      message: title,
      description: message
    });
  };

  const handleChangeRadio = (e) => {
    if (e.target.value === 0 || e.target.value === 1 || e.target.value === 2) {
      setlblValue(0);
    } else {
      setlblValue(e.target.value);
    }
    const name = e.target.id;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, CardAmount: value, CardYear: name }));
  };
  const handleChangeDrpCartType = (event) => {
    let dvalue = event.target.value - 1;
    if (drpCard[dvalue] != null) {
      setyear1(drpCard[dvalue].year1Amount);
      setyear2(drpCard[dvalue].year2Amount);
      setyear5(drpCard[dvalue].year5Amount);
    }
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleSubmit = () => {
    if (btnChanges == 1) {
      updateRoyaltyCardMember({
        ...inputs,
        EntryBy: auth.User
      });
    } else {
      addRoyaltyCardMember({
        ...inputs,
        IssueDate: inputs.issueDate ? inputs.issueDate : currentDate,
        EntryBy: auth.User
      });
    }
  };
  const showModal = () => {
    getDate();
    setIsModalOpen(true);
  };
  const clearField = () => {
    inputs.name = null;
    inputs.address = null;
    inputs.adharNo = null;
    inputs.mobileNo = null;
    inputs.cardNo = null;
    inputs.transNo = null;
    inputs.cardTypeId = 1;
    inputs.cardAmount = 0;
    inputs.paymentMode = 1;
    // inputs.dob = null;
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  //   handleSubmit();
  // };
  const handleCancel = () => {
    setChecked(null);
    clearField();
    setbtnChnage(0);
    setlblValue(0);
    setShow(false);
    setIsModalOpen(false);
  };
  const handleDelete = (Vno) => {
    deleteRoyaltyCardMember({ Vno });
  };
  const getColumns = [
    {
      title: 'Card No',
      dataIndex: 'cardNo'
      // align: 'center',
      // width: 50
    },
    {
      title: 'Patient Name',
      dataIndex: 'name',
      showSorterTooltip: false,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend']
      // align: 'center',
      // width: 50
    },
    {
      title: 'Dob',
      dataIndex: 'dob',
      // align: 'center',
      width: 150
    },
    {
      title: 'Mobile No',
      dataIndex: 'mobileNo',
      align: 'center'
      // width: 50
    },
    {
      title: 'Card category',
      dataIndex: 'cardTypeId',
      align: 'center'
      // width: 50
    },
    {
      title: 'Amount',
      dataIndex: 'cardAmount',
      align: 'center'
      // width: 50
    },
    {
      title: 'Payment Mode',
      dataIndex: 'paymentMode',
      align: 'center'
      // width: 50
    },
    {
      title: 'Transaction No',
      dataIndex: 'transNo',
      align: 'center'
      // width: 50
    },
    {
      title: 'Action',
      align: 'center',
      // width: 50,
      render: (_, data) => {
        return (
          <>
            <li>
              <EditOutlined onClick={() => handleEdit(data)} />
            </li>
            <li>
              <DeleteOutlined style={{ color: '#FF0000' }} onClick={() => handleDelete(data.vno)} />
            </li>
          </>
        );
      }
    }
  ];

  const onShow = (e) => {
    {
      e.target.value === 2 ? setShow(true) : setShow(false);
    }
    const name = e.target.name;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  useEffect(() => {
    allRoyaltyMemeberEntryBy({ EntryBy: auth.User });
    allRoyaltyCard();
    getDate();
  }, []);

  const allRoyaltyMemeberEntryBy = (param) => {
    setLoading(true);
    royalMemberServices.getAllRoyaltyCardMemberEntryBy(param).then((response) => {
      try {
        if (response.data.statusCode == 200) {
          setListSate(response.data.data);
          setLoading(false);
          console.log(response.data);
        } else {
          console.log(response.data);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  };

  const allRoyaltyCard = () => {
    royalMemberServices.getRoyaltyCardCategory().then((response) => {
      try {
        if (response.data.statusCode == 200) {
          setdrpCardValue(response.data.data);
        } else {
          console.log(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    });
  };
  const addRoyaltyCardMember = (params) => {
    royalMemberServices.getaddRoyaltyCardMember(params).then((response) => {
      try {
        if (response.data.statusCode == 200) {
          allRoyaltyMemeberEntryBy({ EntryBy: auth.User });
          openNotification('ROYALTY CARD MEMBER REGISTRATION', response.data.message);
          setInputs('');
          setIsModalOpen(false);
        } else {
          openNotification('ROYALTY CARD MEMBER REGISTRATION', response.data.message);
          setIsModalOpen(true);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  };

  const deleteRoyaltyCardMember = (params) => {
    royalMemberServices.deleteRoyaltyCardMember(params).then((response) => {
      try {
        if (response != null) {
          allRoyaltyMemeberEntryBy({ EntryBy: auth.User });
          openNotification('ROYALTY CARD MEMBER REGISTRATION', response.data.message);
        } else {
          console.log(response.data);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  };

  const updateRoyaltyCardMember = (params) => {
    royalMemberServices.editRoyaltyCardMember(params).then((response) => {
      try {
        if (response.data.statusCode == 200) {
          allRoyaltyMemeberEntryBy({ EntryBy: auth.User });
          openNotification('ROYALTY CARD MEMBER REGISTRATION', response.data.message);
          setbtnChnage(0);
          setInputs('');
          setIsModalOpen(false);
        } else {
          openNotification('ROYALTY CARD MEMBER REGISTRATION', response.data.message);
          setIsModalOpen(true);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal} icon={<PlusCircleFilled />}>
        Add New Royalty
      </Button>
      <Table dataSource={listState} columns={getColumns} pagination={{ pageSize: 5 }} loading={loading} mobileBreakPoint={768} />
      <Modal
        title="Royalty card Registration"
        open={isModalOpen}
        footer={[
          <Button
            type="default"
            key="cancel"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </Button>,
          <Button
            // onSubmit={handleSubmit}
            type="primary"
            key="create"
            onClick={() => {
              handleSubmit();
            }}
          >
            {btnChanges > 0 ? 'Update' : 'OK'}
          </Button>
        ]}
        onCancel={handleCancel}
      >
        <Form
          // onSubmit={handleSubmit}
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          style={{
            maxWidth: 600
          }}
          initialValues={{
            remember: false
          }}
        >
          <Form.Item label="Registration Date">
            <DatePicker
              value={dayjs(inputs.issueDate ? inputs.issueDate : currentDate)}
              // format={dateFormat}
              onChange={(date, dateString) => {
                setInputs((input) => ({ ...input, issueDate: dateString }));
              }}
            />
          </Form.Item>
          <Form.Item label="Name">
            <Input name="name" placeholder="Please Enter Name" value={inputs.name || ''} onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Date Of Birth">
            <DatePicker
              value={dayjs(inputs.dob ? inputs.dob : currentDate)}
              format={dateFormat}
              onChange={(date, dateString) => {
                setInputs((input) => ({ ...input, dob: dateString }));
              }}
            />
          </Form.Item>

          <Form.Item label="Address">
            <TextArea name="address" rows={4} value={inputs.address || ''} onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Addhar">
            <Input name="adharNo" placeholder="Please Enter Addhar" value={inputs.adharNo || ''} onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Mobile">
            <Input
              name="mobileNo"
              addonBefore={prefixSelector}
              style={{ width: '100%' }}
              placeholder="Please Enter Mobile"
              value={inputs.mobileNo || ''}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item label="Type Of Royalty Card" name="cardTypeId">
            <Select
              value={inputs.cardTypeId}
              placeholder="Select Card Type"
              name="cardTypeId"
              onChange={(e) => handleChangeDrpCartType({ target: { name: 'cardTypeId', value: e } })}
            >
              {drpCard.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.name}
                </option>
              ))}
            </Select>

            <Radio.Group name="radiogroup" defaultValue={checked}>
              <Radio id="1" value={year1} onChange={handleChangeRadio}>
                Year One
              </Radio>
              <Radio id="2" value={year2} onChange={handleChangeRadio}>
                Year Two
              </Radio>
              <Radio id="5" value={year5} onChange={handleChangeRadio}>
                Year Five
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Amount">
            <Input style={{ width: 70, color: '#000000' }} value={lblValue} disabled />
          </Form.Item>
          <Form.Item label="Card Number">
            <Input name="cardNo" placeholder="Please Enter Card Number" value={inputs.cardNo || ''} onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Payment Type" name="paymentMode">
            {/* onChange={(e) => handleChangeDrpCartType({ target: { name: 'cardTypeId', value: e } })} */}

            {/* <Select value={inputs.paymentMode} placeholder="Select Payment Type" onChange={onShow} name="paymentMode"> */}

            <Select
              value={inputs.paymentMode}
              placeholder="Select Payment Type"
              name="paymentMode"
              onChange={(e) => onShow({ target: { name: 'paymentMode', value: e } })}
            >
              <Select.Option value={1}>Cash</Select.Option>
              <Select.Option value={2}>Online</Select.Option>
            </Select>
            <br></br>
            {Show ? (
              <Form.Item>
                <br></br>
                <QRCode value="upi://pay?pa=paytmqr281005050101so51i1ictgq8@paytm&pn=Paytm%20Merchant&paytmqr=281005050101SO51I1ICTGQ8" />
              </Form.Item>
            ) : (
              <></>
            )}
          </Form.Item>

          {Show ? (
            <Form.Item label="Transaction ID">
              <Input name="transNo" placeholder="Please Enter Transaction Id" value={inputs.transNo || ''} onChange={handleChange} />
            </Form.Item>
          ) : (
            <></>
          )}
        </Form>
      </Modal>
    </>
  );
}

export default RoyaltyCardRegistration;
