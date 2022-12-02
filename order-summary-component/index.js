const changePlanBtn = document.getElementById("change-plan-btn");
const planTitle = document.getElementById("plan-title");
const planPrice = document.getElementById("plan-price");

let isAnnual;

const changePlan = () => {
  isAnnual
    ? ((planTitle.innerText = "Annual Plan"),
      (planPrice.innerText = "$59.99/year"))
    : ((planTitle.innerText = "Monthly Plan"),
      (planPrice.innerText = "$7.99/month"));
  isAnnual = !isAnnual;
};

changePlanBtn.addEventListener("click", changePlan);
