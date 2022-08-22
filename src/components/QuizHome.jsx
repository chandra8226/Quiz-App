import React from 'react';
import { useEffect, useState } from 'react';
import { noOfQues } from '../utils/questions';
import { useSelector, useDispatch } from 'react-redux';
import { navigatePrev, navigateNext, lockQuestion, saveOption, clearCurrentPage } from '../Redux/player/player.actions';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function QuizHome() {
  const dispatch = useDispatch();

  const playerName = useSelector((state) => state.player.playerName);
  const shuffledQuestions = useSelector((state) => state.player.questions);
  const page = useSelector((state) => state.player.currentPage);

  const chosenOptions = useSelector((state) => state.player.chosenOptions);
  const [answer, setAnswer] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const quesNo = parseInt(location.pathname.slice(6), 10);

  useEffect(() => {
    if (playerName !== null) {
      if (page !== quesNo) navigate(`/quiz/${page}`);
      if (page === null) navigate('/result');
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goPrev = () => {
    const goToPage = page > 1 ? page - 1 : page;
    dispatch(navigatePrev());
    return navigate(`/quiz/${goToPage}`);
  };

  const goNext = () => {
    const goToPage = page < 5 ? page + 1 : page;
    dispatch(navigateNext());
    return navigate(`/quiz/${goToPage}`);
  };

  const lock = () => {
    // Check if atleast one option is saved
    if (chosenOptions[quesNo - 1]?.selectedOption !== null) {
      dispatch(lockQuestion(page - 1));
      toast.success('Option Locked !');
    } else {
      toast.error('Save a Option First !');
    }
  };

  const saveQuestion = (option) => {
    dispatch(saveOption(option, page));
    toast.success('Option Saved !');
  };

  const submitQuiz = () => {
    navigate('/result');
    dispatch(clearCurrentPage());
  };

  const buttonClassName = 'bg-blue-600 p-2 rounded-lg text-white w-1/12 hover:bg-blue-500 text-base font-medium disabled:opacity-75 disabled:cursor-not-allowed disabled:bg-red-700';

  return (
    <div className="flex flex-col w-full bg-neutral-800 h-screen text-white justify-center items-center space-y-10">
      <div className="font-bold text-6xl mb-6">Hi, {playerName}!</div>
      <div className="font-medium text-xl">
        Q{quesNo} of {noOfQues} : {shuffledQuestions[quesNo - 1]?.question}
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="text-lg space-y-2 pb-6">
          {chosenOptions[quesNo - 1]?.selectedOption === null ? (
            <>
              <form>
                {shuffledQuestions[quesNo - 1]?.options?.map((option, idx) => (
                  <div key={idx}>
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer disabled:opacity-60"
                      type="radio"
                      name="flexRadioDefault"
                      id={`flexRadioDefault${idx + 1}`}
                      disabled={chosenOptions[quesNo - 1]?.isLocked}
                      value={option}
                      // checked={false}
                      defaultChecked={false}
                      onChange={(e) => {
                        setAnswer(e.target.value);
                      }}
                    />
                    <label className="form-check-label inline-block" htmlFor={`flexRadioDefault${idx + 1}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </form>
            </>
          ) : (
            <>
              <form>
                {shuffledQuestions[quesNo - 1]?.options?.map((option, idx) => (
                  <div key={idx}>
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      type="radio"
                      name="flexRadioDefault"
                      id={`flexRadioDefault${idx + 1}`}
                      disabled={chosenOptions[quesNo - 1]?.isLocked}
                      defaultChecked={chosenOptions[quesNo - 1]?.selectedOption === option}
                      value={option}
                      onChange={(e) => {
                        setAnswer(e.target.value);
                      }}
                    />
                    <label className="form-check-label inline-block" htmlFor={`flexRadioDefault${idx + 1}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </form>
            </>
          )}
        </div>
        <div className="flex w-full items-center justify-center space-x-5 pt-6">
          <button className={buttonClassName} onClick={() => goPrev()} disabled={quesNo === 1}>
            Previous
          </button>
          <button
            className={buttonClassName}
            onClick={() => {
              lock();
            }}
            disabled={chosenOptions[quesNo - 1]?.isLocked}
          >
            Lock
          </button>
          <button
            className={buttonClassName}
            onClick={() => {
              saveQuestion(answer);
              setAnswer('');
            }}
            disabled={chosenOptions[quesNo - 1]?.isLocked}
          >
            Save
          </button>
          {quesNo === noOfQues ? (
            <>
              <button className={buttonClassName} onClick={() => submitQuiz()} disabled={chosenOptions[quesNo - 1]?.selectedOption === null}>
                Submit
              </button>
            </>
          ) : (
            <>
              <button className={buttonClassName} onClick={() => goNext()} disabled={chosenOptions[quesNo - 1]?.selectedOption === null}>
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizHome;
