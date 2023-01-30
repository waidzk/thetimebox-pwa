import React, { useEffect, useRef, useState } from "react";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function Time() {
  const [textAreaHeight, setTextAreaHeight] = useState(null);
  const textAreaRef = useRef(null);
  const [schedules, setSchedules] = useState(
    localStorage.getItem("schedules")
      ? JSON.parse(localStorage.getItem("schedules"))
      : [
          {
            idData:
              new Date().getTime().toString(36) +
              new Date().getUTCMilliseconds(),
            idTime: new Date().getTime().toString(36),
            data: "wake up",
            time: new Date(),
            isCompleted: true,
          },
        ]
  );

  const updateScheduleData = (index) => (e) => {
    setSchedules(
      schedules.map((item) =>
        item.idData === index
          ? {
              ...item,
              data: e.target.value,
            }
          : item
      )
    );
  };

  const updateScheduleTime = (date, index) => {
    setSchedules(
      schedules.map((item) =>
        item.idTime === index
          ? {
              ...item,
              time: date,
            }
          : item
      )
    );
  };

  const addScheduleData = () => {
    setSchedules([
      ...schedules,
      {
        idData:
          new Date().getTime().toString(36) + new Date().getUTCMilliseconds(),
        idTime: new Date().getTime().toString(36),
        data: "",
        time: new Date(),
        isCompleted: true,
      },
    ]);
  };

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
    setTextAreaHeight(textArea.scrollHeight);
  }, []);

  useEffect(() => {
    localStorage.setItem("schedules", JSON.stringify(schedules));
  }, [schedules]);

  const boxLists = useRef("");

  return (
    <>
      <div className="flex justify-between items-center p-5 w-full h-10 bg-[#004643] mb-5 rounded-3xl">
        <h1 className="text-lg text-[#abd1c6]">Schedule</h1>
        <span
          onClick={() => addScheduleData()}
          className="box text-[#0f3433] bg-[#FBFBFB] px-5 rounded-3xl"
        >
          <span className="fas fa-plus"></span>
        </span>
      </div>
      <div className="max-h-[77vh] overflow-hidden" ref={boxLists}>
        {schedules.map((schedule) => {
          return (
            <div
              id="box-item"
              className="flex justify-between items-center w-full h-10 bg-[#e8e4e6] mb-1 rounded-3xl p-5"
              style={{ height: textAreaHeight }}
              key={schedule.idData}
            >
              <textarea
                id={schedule.idData}
                ref={textAreaRef}
                style={{ height: textAreaHeight }}
                onInput={() => {
                  const textArea = textAreaRef.current;
                  textArea.style.height = "auto";
                  textArea.style.height = `${textArea.scrollHeight}px`;
                  setTextAreaHeight(textArea.scrollHeight);
                }}
                placeholder="write here"
                defaultValue={schedule.data}
                onChange={updateScheduleData(schedule.idData)}
                className="text-[#272343] h-10 bg-transparent overflow-hidden p-1"
              />
              <div className="bg-transparent h-13 flex items-center justify-between px-2 w-1/2">
                <DatePicker
                  id={schedule.idTime}
                  format="HH:mm"
                  ranges={[]}
                  appearance="subtle"
                  placement="auto"
                  value={new Date(schedule.time)}
                  onChange={(date) => updateScheduleTime(date, schedule.idTime)}
                  defaultValue={new Date()}
                />

                <button
                  id="delete-schedule-data"
                  onClick={() => {
                    setSchedules(
                      schedules.filter(
                        (item) => item.idData !== schedule.idData
                      )
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
