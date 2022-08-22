import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { resetAll } from '../Redux/player/player.actions';
import { noOfQues } from '../utils/questions';

function Results() {
  const page = useSelector((state) => state.player.currentPage);
  const playerName = useSelector((state) => state.player.playerName);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (playerName !== null) {
      if (page !== null) navigate(`/quiz/${page}`);
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearAll = () => {
    dispatch(resetAll());
    navigate('/');
  };

  return (
    <div className="bg-neutral-800 flex flex-col text-white h-full pt-20 pb-10 justify-center items-center space-y-4">
      <div className="text-6xl mb-6 font-bold">Hi {playerName}!</div>
      <div className="text-4xl pb-6">Your Final Score is 2 out of {noOfQues}</div>
      <>
        <div className="flex">
          <div className="font-medium text-xl mb-2 mr-10">Q1 of 5 : How many faces does a Dodecahedron have?</div>
          <div className="font-medium text-xl justify-end">0/1</div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="text-lg space-y-2 pb-6">
            <div className="flex flex-row text-green-400">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                disabled
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
              <div className="ml-2 my-1">
                <BsFillCheckCircleFill />
              </div>
            </div>
            <div className="">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                disabled
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <div className="">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                disabled
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <div className="">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                disabled
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="flex">
          <div className="font-medium text-xl mb-2 mr-10">Q1 of 5 : How many faces does a Dodecahedron have?</div>
          <div className="font-medium text-xl justify-end">0/1</div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="text-lg space-y-2 pb-6">
            <div className="flex flex-row text-green-400">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                disabled
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
              <div className="ml-2 my-1">
                <BsFillCheckCircleFill />
              </div>
            </div>
            <div className="">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <div className="">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <div className="">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="flex">
          <div className="font-medium text-xl mb-2 mr-10">Q1 of 5 : How many faces does a Dodecahedron have?</div>
          <div className="font-medium text-xl justify-end">0/1</div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="text-lg space-y-2 pb-6">
            <div className="flex flex-row text-red-400">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
              <div className="ml-2 my-1">
                <BsFillXCircleFill />
              </div>
            </div>
            <div className="">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <div className="">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <div className="">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label inline-block" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
          </div>
          <button
            className="mt-10 mb-4 bg-blue-500 p-2 rounded-lg text-white w-1/12 hover:bg-green-800 text-base font-medium"
            onClick={() => {
              clearAll();
            }}
          >
            Home
          </button>
        </div>
      </>
    </div>
  );
}

export default Results;
