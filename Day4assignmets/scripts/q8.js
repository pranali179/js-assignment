ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  
  ask(
    "Do you agree?",
    function () {
      alert(" agreed.");
    },
    function () {
      alert(" canceled the execution.");
    }
  );