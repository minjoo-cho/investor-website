// 투자자 데이터
const investors = [
  {
    id: 'warren-buffett',
    name: '워렌 버핏',
    nameEn: 'Warren Buffett',
    image: 'https://via.placeholder.com/200',
    philosophy: '가치투자의 대가',
    isAlive: true,
    age: '94세',
    performance: '연 20%대 복리(1965~2021)',
    assets: '$1660억',
    characteristics: '버크셔 해서웨이 회장',
    portfolioLink: '최근 포트폴리오 보기',
    topStocks: [
      { symbol: 'BRK.A', name: 'Berkshire Hathaway', score: 95.34, rank: 1 },
      { symbol: 'PG', name: 'Procter & Gamble', score: 91.20, rank: 2 },
      { symbol: 'COST', name: 'Costco', score: 89.53, rank: 3 }
    ]
  },
  {
    id: 'charlie-munger',
    name: '찰리 멍거',
    nameEn: 'Charlie Munger',
    image: 'https://via.placeholder.com/200',
    philosophy: '고품질 기업 집중투자',
    isAlive: false,
    age: '99세',
    performance: '버크셔 연 20%대 복리',
    assets: '$27억',
    characteristics: '버핏의 파트너',
    portfolioLink: '마지막 포트폴리오 보기',
    topStocks: [
      { symbol: 'MOODY', name: "Moody's", score: 91.59, rank: 1 },
      { symbol: 'BYD', name: 'BYD', score: 87.10, rank: 2 },
      { symbol: 'KO', name: 'Coca-Cola', score: 86.65, rank: 3 }
    ]
  },
  {
    id: 'benjamin-graham',
    name: '벤자민 그레이엄',
    nameEn: 'Benjamin Graham',
    image: 'https://via.placeholder.com/200',
    philosophy: '안전마진의 창시자',
    isAlive: false,
    age: '82세',
    performance: '연 20%대 복리(1936~1956)',
    assets: '수백만불',
    characteristics: '가치투자 창시자',
    portfolioLink: '마지막 포트폴리오 보기',
    topStocks: [
      { symbol: 'VZ', name: 'Verizon', score: 95, rank: 1 },
      { symbol: 'WBA', name: 'Walgreens Boots', score: 85, rank: 2 },
      { symbol: 'CI', name: 'Cigna', score: 80, rank: 3 }
    ]
  },
  {
    id: 'peter-lynch',
    name: '피터 린치',
    nameEn: 'Peter Lynch',
    image: 'https://via.placeholder.com/200',
    philosophy: '일상에서 투자 아이디어 발견',
    isAlive: true,
    age: '81세',
    performance: '연 29.2%(1977~1990)',
    assets: '$4.5억',
    characteristics: '마젤란 펀드 전설',
    portfolioLink: '최근 포트폴리오 보기',
    topStocks: [
      { symbol: 'SBUX', name: 'Starbucks', score: 92, rank: 1 },
      { symbol: 'HD', name: 'Home Depot', score: 89, rank: 2 },
      { symbol: 'TGT', name: 'Target', score: 84, rank: 3 }
    ]
  },
  {
    id: 'ray-dalio',
    name: '레이 달리오',
    nameEn: 'Ray Dalio',
    image: 'https://via.placeholder.com/200',
    philosophy: '리스크 패리티 접근법',
    isAlive: true,
    age: '76세',
    performance: '수십년간 시장 상회',
    assets: '$190억',
    characteristics: '올웨더 전략',
    portfolioLink: '최근 포트폴리오 보기',
    topStocks: [
      { symbol: 'SPY', name: 'S&P 500 ETF', score: 90, rank: 1 },
      { symbol: 'GLD', name: 'Gold ETF', score: 87, rank: 2 },
      { symbol: 'TLT', name: 'Treasury Bond ETF', score: 85, rank: 3 }
    ]
  },
  // 나머지 투자자 데이터...
];

// 메달 컴포넌트
class Medal extends React.Component {
  render() {
    const colors = {
      1: 'bg-yellow-500',
      2: 'bg-gray-300',
      3: 'bg-amber-600',
    };
    
    return (
      <div className={`${colors[this.props.rank] || 'bg-blue-200'} w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-xs`}>
        {this.props.rank}
      </div>
    );
  }
}

// 투자자 카드 컴포넌트
class InvestorCard extends React.Component {
  render() {
    const { investor, onViewDetails } = this.props;
    
    return (
      <div 
        className="group cursor-pointer transition-all hover:shadow-lg bg-white rounded-lg overflow-hidden" 
        onClick={() => onViewDetails(investor.id)}
      >
        <div className="relative h-48">
          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10"></div>
          
          {/* 투자자 이미지 */}
          <img 
            src={investor.image} 
            alt={investor.name} 
            className="w-full h-full object-cover object-top"
          />
          
          {/* 포트폴리오 링크 */}
          <div className="absolute top-2 right-2 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            {investor.portfolioLink}
          </div>
          
          {/* 이름과 핵심 정보 오버레이 */}
          <div className="absolute bottom-0 left-0 right-0 p-3 z-20 text-white">
            <h3 className="text-xl font-bold">{investor.name}</h3>
            <p className="text-xs text-white opacity-90">{investor.philosophy}</p>
          </div>
        </div>
        
        <div className="p-3">
          <div className="text-xs grid grid-cols-2 gap-2 mb-2">
            <div>
              <span className="text-gray-500">연령:</span> {investor.age}
            </div>
            <div>
              <span className="text-gray-500">자산:</span> {investor.assets}
            </div>
            <div className="col-span-2">
              <span className="text-gray-500">성과:</span> {investor.performance}
            </div>
            <div className="col-span-2">
              <span className="text-gray-500">특징:</span> {investor.characteristics}
            </div>
          </div>
          
          <div className="border-t pt-2 mt-2">
            <div className="text-xs font-medium mb-1">추천 종목</div>
            <div className="space-y-1">
              {investor.topStocks.map((stock, index) => (
                <div key={stock.symbol} className="flex items-center gap-1 text-xs">
                  <Medal rank={index + 1} />
                  <span className="font-medium">{stock.symbol}</span>
                  <span className="text-gray-600 text-xs ml-1">{stock.name}</span>
                  <span className="text-blue-600 text-xs ml-auto">{stock.score.toFixed(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 홈페이지 컴포넌트
class HomePage extends React.Component {
  render() {
    const { onViewDetails } = this.props;
    
    return (
      <div className="max-w-7xl mx-auto px-4 py-4">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-1">대가차트</h1>
          <h2 className="text-lg text-gray-600">부자 따라 투자하기</h2>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {investors.map(investor => (
            <InvestorCard 
              key={investor.id} 
              investor={investor} 
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    );
  }
}

// 투자자 상세 페이지
class InvestorDetailPage extends React.Component {
  render() {
    const { investor, onBack } = this.props;
    
    return (
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button 
          onClick={onBack}
          className="mb-4 text-blue-600 flex items-center gap-1 hover:underline"
        >
          ← 돌아가기
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="h-56 relative">
            {/* 이미지 배경 */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={investor.image} 
                alt={investor.name} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
            </div>
            
            {/* 포트폴리오 링크 */}
            <div className="absolute top-4 right-4">
              <a 
                href="#" 
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:shadow-lg transition-shadow"
              >
                {investor.portfolioLink}
              </a>
            </div>
            
            {/* 투자자 정보 */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-2">
                  <h1 className="text-4xl font-bold">{investor.name}</h1>
                  <span className="text-xl opacity-80">({investor.nameEn})</span>
                </div>
                <p className="text-lg opacity-90">{investor.philosophy}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-2">투자자 정보</h3>
                <div className="space-y-2 text-gray-700">
                  <div>
                    <span className="font-medium">연령:</span> {investor.age}
                  </div>
                  <div>
                    <span className="font-medium">자산:</span> {investor.assets}
                  </div>
                  <div>
                    <span className="font-medium">성과:</span> {investor.performance}
                  </div>
                  <div>
                    <span className="font-medium">특징:</span> {investor.characteristics}
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-green-800 mb-2">Top 3 추천 종목</h3>
                <div className="space-y-3">
                  {investor.topStocks.map((stock, index) => (
                    <div key={stock.symbol} className="flex items-center gap-3 p-2 bg-white rounded shadow-sm">
                      <Medal rank={index + 1} />
                      <div>
                        <div className="font-medium">{stock.symbol}</div>
                        <div className="text-xs text-gray-600">{stock.name}</div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-blue-600 font-bold">{stock.score.toFixed(1)}</div>
                        <div className="text-xs text-gray-600">종합점수</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 메인 앱 컴포넌트
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInvestor: null
    };
    
    this.handleViewDetails = this.handleViewDetails.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  
  handleViewDetails(investorId) {
    this.setState({
      selectedInvestor: investors.find(inv => inv.id === investorId)
    });
  }
  
  handleBack() {
    this.setState({
      selectedInvestor: null
    });
  }
  
  render() {
    const { selectedInvestor } = this.state;
    
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div 
              className="font-bold text-xl cursor-pointer" 
              onClick={this.handleBack}
            >
              부자따라 부자되기
            </div>
            {selectedInvestor && (
              <div className="text-sm text-gray-600">
                {selectedInvestor.name}의 투자 전략
              </div>
            )}
          </div>
        </nav>
        
        {selectedInvestor ? (
          <InvestorDetailPage 
            investor={selectedInvestor} 
            onBack={this.handleBack} 
          />
        ) : (
          <HomePage onViewDetails={this.handleViewDetails} />
        )}
      </div>
    );
  }
}

// 앱 렌더링
ReactDOM.render(<App />, document.getElementById('root'));
