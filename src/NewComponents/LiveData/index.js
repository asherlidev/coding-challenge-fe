import Item from "./Item";

export default function LiveData() {
  return (
    <div className="main-difi_staking my-5">
      <div className="font-36 main-bold color-black my-4">Live Data</div>
      <div className="p-30 w-100 table-body">
        <div className="row">
            <div className="col col-md-4 col-sm-12">pie chart</div>
            <div className="col col-md-4 col-sm-6">
                <Item color="#64a5f8" icon='icon' title="$ 6,449,620" subtitle="Invested in Fairmint"/>
                <Item color="#8972f7" icon='icon' title="$34.3M" subtitle="Company valuation"/>
            </div>
            <div className="col col-md-4 col-sm-6">
                <Item color="#dbffdf" icon='icon' title="2,181,701 FAIR" subtitle="Purchased by investros"/>
                <Item color="#ffa68d" icon='icon' title="35.36%" subtitle="Eauidity allocation (minimum)"/>
            </div>
        </div>
      </div>
    </div>
  );
}
