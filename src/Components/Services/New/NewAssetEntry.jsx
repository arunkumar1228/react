import React, { useState } from 'react';
import '../New/NewAssetEntry.css';

const AssetForm = () => {
    const [form, setForm] = useState({
        assetBrand: '',
        assetModel: '',
        serialNo: '',
        specification: '',
        antivirusVersion: '',
        osVersion: '',
        ipAddress: '',
        macAddress: '',
        empId: '',
        empName: '',
        department: '',
        empType: '',
        billDate: '',
        rate: '',
        assetTagCode: '',
        laptopStatus: 'In hand',
        assetType: 'RT',
        itInStock: false,
        assetRecoveryDocument: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        setForm({
            ...form,
            assetRecoveryDocument: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(form);
    };

    return (
        <div className="container"> 
            <form className="asset-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Asset Brand</label>
                    <input type="text" name="assetBrand" value={form.assetBrand} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Asset Model</label>
                    <input type="text" name="assetModel" value={form.assetModel} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Serial No</label>
                    <input type="text" name="serialNo" value={form.serialNo} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Specification</label>
                    <input type="text" name="specification" value={form.specification} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Antivirus & Version</label>
                    <input type="text" name="antivirusVersion" value={form.antivirusVersion} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>OS Version</label>
                    <input type="text" name="osVersion" value={form.osVersion} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>IP Address</label>
                    <input type="text" name="ipAddress" value={form.ipAddress} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>MAC Address</label>
                    <input type="text" name="macAddress" value={form.macAddress} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Emp ID</label>
                    <input type="text" name="empId" value={form.empId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Emp Name</label>
                    <input type="text" name="empName" value={form.empName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Department</label>
                    <input type="text" name="department" value={form.department} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Emp Type</label>
                    <input type="text" name="empType" value={form.empType} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Bill Date</label>
                    <input type="date" name="billDate" value={form.billDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Rate</label>
                    <input type="number" name="rate" value={form.rate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Asset Tag Code</label>
                    <input type="text" name="assetTagCode" value={form.assetTagCode} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Laptop Status</label>
                    <select name="laptopStatus" value={form.laptopStatus} onChange={handleChange}>
                        <option value="In hand">In hand</option>
                        <option value="Return">Return</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Asset Type</label>
                    <select name="assetType" value={form.assetType} onChange={handleChange}>
                        <option value="RT">RT</option>
                        <option value="Own">Own</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>IT In Stock</label>
                    <input type="checkbox" name="itInStock" checked={form.itInStock} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Attach Asset Recovery Document</label>
                    <input type="file" name="assetRecoveryDocument" onChange={handleFileChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    );
};

export default AssetForm;
