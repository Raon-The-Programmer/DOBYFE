import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { MdAccountCircle } from 'react-icons/md';
import './profile.css';
import { FaUserEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import auth from '../../services/auth';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userProfile) {
      // Fetch data only if userProfile is null
      auth
        .getProfile(dispatch)
        .then((data) => {
          setUserProfile(data);
          setName(data.name);
          setNumber(data.phone);
          setAddress(data.address);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, userProfile]);

  const handleLogout = () => {
    sessionStorage.removeItem('LoggedinUser');
    setUserProfile(null);
    dispatch({ type: 'USER_LOGOUT' });
    navigate('/signin');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      phone: number,
      address: address,
    };
    console.log(user.address);
    auth
      .updateProfile(user)
      .then((data) => {
        console.log('User Updated: ', data);
        // Update the local user profile state
        setUserProfile(data);
        // Optionally, close the update form
        setVisible(false);
      })
      .catch((err) => {
        console.error('error: ', err);
      });
  };

  if (!userProfile) {
    // Render loading state or placeholder while fetching data
    return <Triangle
    visible={true}
    height="80"
    width="80"
    color="black"
    ariaLabel="triangle-loading"
  />;
  }

  return (
    <div>
      <div className='profile d-flex justify-content-between'>
        <div className='d-flex'>
          <MdAccountCircle size={80} className='mx-2 mt-3' />
          <div className='mt-4'>
            <h4>{userProfile.name}</h4>
            <p>+91 {userProfile.phone}</p>
          </div>
        </div>
        <FaUserEdit
          size={24}
          className='mt-5 mx-4'
          onClick={() => setVisible(!visible)}
        />
      </div>

      <AnimatePresence mode='popLayout'>
        {visible && (
          <motion.div
            initial={{ scale: 0, x: 50, y: 500 }}
            animate={{ scale: 1, x: 45, y: 50 }}
            exit={{ scale: 0, x: 150, y: -210 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className='Updateform'
          >
            <form onSubmit={handleUpdate} className='input'>
              <div>
                <strong>
                  <label htmlFor='Name'>Name</label>
                </strong>
                <input
                  className='form-control mb-2'
                  type='text'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <strong>
                  <label htmlFor='Phone'>Phone</label>
                </strong>
                <input
                  className='form-control mb-2'
                  type='number'
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div>
                <strong>
                  <label htmlFor='Address'>Address</label>
                </strong>
                <input
                  className='form-control'
                  type='text'
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button className='btn mt-4 classbtn'>Update</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='mx-2 mt-4'>
        <div className='box'>
          <p>My Orders</p>
          <p>{'>'}</p>
        </div>
        <div className='box'>
          <p>My Address</p>
          <p>{'>'}</p>
        </div>
        <hr />
        <h4 style={{}}>Other Information</h4>
        <div className='box'>
          <p>Share the app</p>
          <p>{'>'}</p>
        </div>
        <div className='box'>
          <p>About Us</p>
          <p>{'>'}</p>
        </div>
        <div className='box'>
          <p>Account Privacy</p>
          <p>{'>'}</p>
        </div>
        <div className='box'>
          <p className='text-danger'>Delete Account</p>
          <p>{'>'}</p>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <button className='btn btn-dark' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Profile;
