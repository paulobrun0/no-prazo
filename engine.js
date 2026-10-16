(function(root){
const day=s=>Date.parse(s+'T00:00:00Z')/86400000;
function plan(balance,bills,incomes,today,weekdays=[0,1,2,3,4,5,6]){
 const dates=[...new Set(bills.filter(b=>!b.paid).map(b=>b.date))].sort();
 let daily=0; const rows=[];
 for(const date of dates){const cost=bills.filter(b=>!b.paid&&b.date<=date).reduce((a,b)=>a+b.amount,0);const income=incomes.filter(i=>!i.received&&i.date<=date).reduce((a,b)=>a+b.amount,0);let days=0;for(let n=day(today);n<=day(date);n++)if(weekdays.includes(new Date(n*86400000).getUTCDay()))days++;const gap=Math.max(0,cost-balance-income);const rate=days?Math.ceil(gap/days):0;daily=Math.max(daily,rate);rows.push({date,cost,income,days,gap,rate,urgent:gap>0&&days===0});}
 return {daily,rows,urgent:rows.some(r=>r.urgent)};
}
if(typeof module!=='undefined')module.exports={plan};else root.Finance={plan};
})(this);
