---
Layout:
Title: comparison between bragFirst and bragAgain
Date: 2017- 11-10
---

# Will the functions below return the same results? Clearly state the reason(s) for your answer?
function bragFirst()

{
  return {
      brag: "Ska ba forgiva!"
  };
}

function bragAgain()
{
  return 
  {
      brag: "Ska ba forgiva!"
  };
}

No the functions will not return the same result, brag_First will return the object brag: "Ska ba forgiva!"}, because the object is in-line with the return statement.

brag_Again will return undefined reason being that, nothing is returned, there's an empty space right after the return statement and any thing that is not inline with the return statement or below return statement is not part of the execution or part of the function.  