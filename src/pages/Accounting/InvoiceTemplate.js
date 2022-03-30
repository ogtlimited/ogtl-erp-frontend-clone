import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/img/img.png";
import axiosInstance from "../../services/api";
import { formatter } from "../../services/numberFormatter";

const InvoiceTemplate = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchInvoice = () => {
      axiosInstance
        .get(`api/invoice/${id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchInvoice();
  }, [id]);
  return (
    <>
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Invoice</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/client-invoice">Invoices</Link>
              </li>
              <li className="breadcrumb-item active">Invoice</li>
            </ul>
          </div>
          <div className="col-auto float-right ml-auto">
            <div className="btn-group btn-group-sm">
              <button className="btn btn-white">CSV</button>
              <button className="btn btn-white">PDF</button>
              <button className="btn btn-white">
                <i className="fa fa-print fa-lg"></i> Print
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6 m-b-20">
                  <img src={logo} className="inv-logo" alt="" />
                  <ul className="list-unstyled">
                    <li>Bluetag Group</li>
                    <li>2nd Floor, ASTA GALLERY Plot 1185,Parkway Road</li>
                    <li>Cadastral Zone Mabushi District, Abuja</li>
                    <li>GST No:</li>
                  </ul>
                </div>
                <div className="col-sm-6 m-b-20">
                  <div className="invoice-details">
                    <h3 className="text-uppercase">Invoice {data?.ref}</h3>
                    <ul className="list-unstyled">
                      <li>
                        Date:{" "}
                        <span>
                          {moment(data?.invoice_date).format("MMMM Do, YYYY")}
                        </span>
                      </li>
                      <li>
                        Due date:{" "}
                        <span>
                          {moment(data?.due_date).format("MMMM Do, YYYY")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-7 col-xl-8 m-b-20">
                  <h5>Invoice to:</h5>
                  <ul className="list-unstyled">
                    <li>
                      <h5>
                        <strong>{data?.customer?.fullName}</strong>
                      </h5>
                    </li>
                    <li>
                      <span>{data?.customer?.company}</span>
                    </li>
                    <li>{data?.customer?.address}</li>
                    <li>{data?.customer?.city}</li>
                    <li>{data?.customer?.country}</li>
                    <li>{data?.customer?.phone}</li>
                    <li>
                      <Link>{data?.customer?.email}</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-lg-5 col-xl-4 m-b-20">
                  <span className="text-muted">Payment Details:</span>
                  <ul className="list-unstyled invoice-payment-details">
                    <li>
                      <h5>
                        Total Due:{" "}
                        <span className="text-right">
                          {formatter.format(data?.total_amount)}
                        </span>
                      </h5>
                    </li>
                    <li>
                      Bank name: <span>First Bank Nigeria</span>
                    </li>
                    <li>
                      Country: <span>Nigeria</span>
                    </li>
                    <li>
                      City: <span>Abuja FCT</span>
                    </li>
                    <li>
                      Address: <span>Zone 3 Wuse</span>
                    </li>
                    <li>
                      IBAN: <span>FBN37784028476740</span>
                    </li>
                    <li>
                      SWIFT code: <span>FBT4E</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th className="d-none d-sm-table-cell">DESCRIPTION</th>
                      <th>RATE</th>
                      <th>PRICE</th>
                      <th>UNITS</th>
                      <th>TAX</th>
                      <th className="text-right">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.productItems.map((product) => (
                      <tr key={product._id}>
                        <td>{product?.product}</td>
                        <td className="d-none d-sm-table-cell">
                          {product?.description}
                        </td>
                        <td>{product?.rate}</td>
                        <td>{product?.price}</td>
                        <td>{product?.units}</td>
                        <td>{product?.tax}</td>
                        <td className="text-right">$2000</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <div className="row invoice-payment">
                  <div className="col-sm-7"></div>
                  <div className="col-sm-5">
                    <div className="m-b-20">
                      <div className="table-responsive no-border">
                        <table className="table mb-0">
                          <tbody>
                            {/* <tr>
                              <th>Subtotal:</th>
                              <td className="text-right">$7,000</td>
                            </tr>
                            <tr>
                              <th>
                                Tax: <span className="text-regular">(25%)</span>
                              </th>
                              <td className="text-right">$1,750</td>
                            </tr> */}
                            <tr>
                              <th>Total:</th>
                              <td className="text-right text-primary">
                                <h5>{formatter.format(data?.total_amount)}</h5>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice-info">
                  <h5>Other information</h5>
                  <p className="text-muted"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceTemplate;
