<CloseOutlineIcon className="cancel-icon" oncClick={()=> {
  setListData((prev) => [...prev, listData.filter((task) => task !== listData[cardIndex])]) />