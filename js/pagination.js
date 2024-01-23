// 模拟的数据
const campaignData = [
  {
    id: 1,
    name: "campaign 1",
    imgUrl: "../pics/cp1.png",
    endDay: "2024/03/25",
  },
  {
    id: 2,
    name: "campaign 2",
    imgUrl: "../pics/cp2.png",
    endDay: "2024/04/25",
  },
  {
    id: 3,
    name: "campaign 3",
    imgUrl: "../pics/cp3.png",
    endDay: "2024/05/25",
  },
  {
    id: 4,
    name: "campaign 4",
    imgUrl: "../pics/cp4.png",
    endDay: "2024/06/25",
  },
  {
    id: 5,
    name: "campaign 5",
    imgUrl: "../pics/cp5.png",
    endDay: "2024/07/25",
  },
  {
    id: 6,
    name: "campaign 6",
    imgUrl: "../pics/cp6.png",
    endDay: "2024/08/25",
  },
  // 其他数据
];

const campaignPageSize = 2; // 每页显示的记录数
let campaignCurrentPage = 1; // 当前页码

// 根据当前页加载数据
function campaignLoadData() {
  const campaignStartIndex = (campaignCurrentPage - 1) * campaignPageSize;
  const campaignEndIndex = campaignStartIndex + campaignPageSize;
  const campaignCurrentData = campaignData.slice(
    campaignStartIndex,
    campaignEndIndex
  );

  // 清空表格内容
  document.getElementsByClassName("campaignContainer1")[0].innerHTML = "";
  document.getElementsByClassName("campaignContainer2")[0].innerHTML = "";

  // 将数据添加到表格中
  campaignCurrentData.forEach((item) => {
    const campaignRow = `<p class="title1"><b>${item.name}</b><p class="endDay1" style = "position: absolute;
        right: 20px;
        ">${item.endDay}まで</p></p>
        <div class="imgContainer">
          <a href="#"><img src="${item.imgUrl}" alt="${item.name}" class="pic1"></a>
        </div>
        `;
    document.getElementsByClassName("campaignContainer1")[0].innerHTML +=
      campaignRow;
    // document.getElementsByClassName('container2')[0].innerHTML += campaignRow;
  });

  // 生成分页链接
  campaignGeneratePagination();
}

// 生成分页链接
function campaignGeneratePagination() {
  const campaignTotalPages = Math.ceil(campaignData.length / campaignPageSize);
  const campaignPaginationContainer =
    document.getElementById("campaignPagination");

  // 清空分页链接容器
  campaignPaginationContainer.innerHTML = "";

  // 添加上一页链接
  if (campaignCurrentPage > 1) {
    const campaignPrevLink = campaignCreatePaginationLink(
      "[previous]",
      campaignCurrentPage - 1
    );
    campaignPaginationContainer.appendChild(campaignPrevLink);
  }

  // 添加当前页链接
  // const campaignCurrentPageLink = campaignCreatePaginationLink(campaignCurrentPage, campaignCurrentPage);
  // campaignPaginationContainer.appendChild(campaignCurrentPageLink);

  // 添加下一页链接
  if (campaignCurrentPage < campaignTotalPages) {
    const campaignNextLink = campaignCreatePaginationLink(
      "[next]",
      campaignCurrentPage + 1
    );
    campaignPaginationContainer.appendChild(campaignNextLink);
  }
}

// 创建分页链接
function campaignCreatePaginationLink(campaignLabel, campaignPage) {
  const campaignLink = document.createElement("a");
  campaignLink.href = "#";
  campaignLink.textContent = campaignLabel;

  // 点击链接时切换页码
  campaignLink.addEventListener("click", function (event) {
    event.preventDefault();
    campaignCurrentPage = campaignPage;
    campaignLoadData();
    console.log(campaignLabel);
    console.log(campaignPage);
  });

  return campaignLink;
}

// 初始化页面时加载数据和分页链接
campaignLoadData();
