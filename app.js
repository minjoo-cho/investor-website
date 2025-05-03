import React, { useState } from 'react';

function InvestorApp() {
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [hoveredInvestor, setHoveredInvestor] = useState(null);
  
  // 투자자 데이터 (10명 모두 포함)
  const investors = [
    {
      id: 'warren-buffett',
      name: '워렌 버핏',
      nameEn: 'Warren Buffett',
      image: 'https://via.placeholder.com/200',
      philosophy: '가치투자의 대가, 장기적 관점으로 훌륭한 기업에 투자',
      age: '94세',
      performance: '연 20%대 복리(1965~2021)',
      assets: '$1660억',
      characteristics: '버크셔 해서웨이 회장',
      portfolioLink: '최근 포트폴리오 보기',
      topStocks: [
        { symbol: 'BRK.A', name: 'Berkshire Hathaway', score: 95.34, rank: 1 },
        { symbol: 'PG', name: 'Procter & Gamble', score: 91.20, rank: 2 },
        { symbol: 'COST', name: 'Costco', score: 89.53, rank: 3 }
      ],
      metrics: [
        { name: 'economicMoat', displayName: '경제적 해자', weight: 0.25, criteria: '브랜드, 특허 등 장기 경쟁우위' },
        { name: 'roe', displayName: 'ROE', weight: 0.20, criteria: '15% 이상, 10년간 일관성' },
        { name: 'debtToEquity', displayName: '부채비율', weight: 0.15, criteria: '0.5x 이하' },
        { name: 'pe', displayName: 'P/E', weight: 0.10, criteria: '업종 평균 대비 낮을수록 좋음' },
        { name: 'freeCashFlow', displayName: '현금흐름', weight: 0.10, criteria: '예측 가능한 현금창출' }
      ]
    },
    {
      id: 'charlie-munger',
      name: '찰리 멍거',
      nameEn: 'Charlie Munger',
      image: 'https://via.placeholder.com/200',
      philosophy: '고품질 기업에 집중투자하는 심리학적 접근',
      age: '99세',
      performance: '버크셔 연 20%대 복리',
      assets: '$27억',
      characteristics: '버핏의 파트너',
      portfolioLink: '마지막 포트폴리오 보기',
      topStocks: [
        { symbol: 'MOODY', name: "Moody's", score: 91.59, rank: 1 },
        { symbol: 'BYD', name: 'BYD', score: 87.10, rank: 2 },
        { symbol: 'KO', name: 'Coca-Cola', score: 86.65, rank: 3 }
      ],
      metrics: [
        { name: 'economicMoat', displayName: '경제적 해자', weight: 0.30, criteria: '50년간 따라잡기 어려운 경쟁우위' },
        { name: 'managementQuality', displayName: '경영진 품질', weight: 0.25, criteria: '정직성, 역량, 주주 이익 우선' },
        { name: 'businessSimplicity', displayName: '비즈니스 단순성', weight: 0.15, criteria: '이해하기 쉬운 사업모델' },
        { name: 'safetyMargin', displayName: '안전마진', weight: 0.12, criteria: '내재가치 대비 30% 이상 할인' },
        { name: 'pe', displayName: 'P/E', weight: 0.08, criteria: '성장성 대비 합리적(과열되지 않은 가격)' }
      ]
    },
    {
      id: 'benjamin-graham',
      name: '벤자민 그레이엄',
      nameEn: 'Benjamin Graham',
      image: 'https://via.placeholder.com/200',
      philosophy: '안전마진의 창시자, 가치투자의 기초를 세운 대가',
      age: '82세',
      performance: '연 20%대 복리(1936~1956)',
      assets: '수백만불',
      characteristics: '가치투자 창시자',
      portfolioLink: '마지막 포트폴리오 보기',
      topStocks: [
        { symbol: 'VZ', name: 'Verizon', score: 95, rank: 1 },
        { symbol: 'WBA', name: 'Walgreens Boots', score: 85, rank: 2 },
        { symbol: 'CI', name: 'Cigna', score: 80, rank: 3 }
      ],
      metrics: [
        { name: 'safetyMargin', displayName: '안전마진', weight: 0.30, criteria: '내재가치 대비 30% 이상 할인' },
        { name: 'grahamNumber', displayName: '그레이엄 넘버', weight: 0.20, criteria: '√(22.5 × EPS × BPS) > 현재가' },
        { name: 'pe', displayName: 'P/E', weight: 0.15, criteria: '15 이하' },
        { name: 'pb', displayName: 'P/B', weight: 0.10, criteria: '1.5 이하' },
        { name: 'debtToEquity', displayName: '부채비율', weight: 0.10, criteria: '1.0x 이하' }
      ]
    },
    {
      id: 'peter-lynch',
      name: '피터 린치',
      nameEn: 'Peter Lynch',
      image: 'https://via.placeholder.com/200',
      philosophy: '일상에서 투자 아이디어를 발견하는 현실적 접근',
      age: '81세',
      performance: '연 29.2%(1977~1990)',
      assets: '$4.5억',
      characteristics: '마젤란 펀드 전설',
      portfolioLink: '최근 포트폴리오 보기',
      topStocks: [
        { symbol: 'SBUX', name: 'Starbucks', score: 92, rank: 1 },
        { symbol: 'HD', name: 'Home Depot', score: 89, rank: 2 },
        { symbol: 'TGT', name: 'Target', score: 84, rank: 3 }
      ],
      metrics: [
        { name: 'pegRatio', displayName: 'PEG 비율', weight: 0.25, criteria: 'PEG < 1.0 (성장률 대비 저평가)' },
        { name: 'epsGrowth', displayName: '이익 성장률', weight: 0.20, criteria: '5년간 연평균 10~20% EPS 성장' },
        { name: 'debtToEquity', displayName: '부채비율', weight: 0.15, criteria: '0.8x 이하' },
        { name: 'pe', displayName: 'P/E', weight: 0.10, criteria: '업종 평균 대비 낮을수록 좋음' },
        { name: 'cashHolding', displayName: '현금 보유량', weight: 0.10, criteria: '순현금(현금-부채) > 0' }
      ]
    },
    {
      id: 'ray-dalio',
      name: '레이 달리오',
      nameEn: 'Ray Dalio',
      image: 'https://via.placeholder.com/200',
      philosophy: '전략적 자산배분과 리스크 패리티 접근법',
      age: '76세',
      performance: '수십년간 시장 상회',
      assets: '$190억',
      characteristics: '올웨더 전략',
      portfolioLink: '최근 포트폴리오 보기',
      topStocks: [
        { symbol: 'SPY', name: 'S&P 500 ETF', score: 90, rank: 1 },
        { symbol: 'GLD', name: 'Gold ETF', score: 87, rank: 2 },
        { symbol: 'TLT', name: 'Treasury Bond ETF', score: 85, rank: 3 }
      ],
      metrics: [
        { name: 'diversification', displayName: '분산도', weight: 0.20, criteria: '자산군/국가/통화/섹터 다양화' },
        { name: 'macroEconomicIndicators', displayName: '거시경제지표', weight: 0.15, criteria: '금리, 인플레이션, GDP 성장 등' },
        { name: 'riskParity', displayName: '리스크 패리티', weight: 0.15, criteria: '각 자산군의 변동성에 맞춘 비중 조정' },
        { name: 'correlation', displayName: '상관관계', weight: 0.10, criteria: '상관관계 낮은 자산군 조합' },
        { name: 'liquidity', displayName: '유동성', weight: 0.10, criteria: '위기 시 신속 매도 가능성' }
      ]
    },
    {
      id: 'george-soros',
      name: '조지 소로스',
      nameEn: 'George Soros',
      image: 'https://via.placeholder.com/200',
      philosophy: '시장 심리와 자기반사성을 활용한 철학적 접근',
      age: '94세',
      performance: '연 30%대 복리(1970~2000)',
      assets: '$70억',
      characteristics: '영란은행 공략',
      portfolioLink: '최근 포트폴리오 보기',
      topStocks: [
        { symbol: 'META', name: 'Meta Platforms', score: 88, rank: 1 },
        { symbol: 'RIVN', name: 'Rivian', score: 84, rank: 2 },
        { symbol: 'AMZN', name: 'Amazon', score: 82, rank: 3 }
      ],
      metrics: [
        { name: 'macroEconomicAnalysis', displayName: '거시경제 분석', weight: 0.20, criteria: '환율, 금리, 정책 등 글로벌 변수' },
        { name: 'marketInefficiency', displayName: '시장 비효율성', weight: 0.18, criteria: '시장의 틈, 과잉반응 포착' },
        { name: 'positionSize', displayName: '포지션 규모', weight: 0.15, criteria: '기회 발견 시 대규모 베팅' },
        { name: 'liquidity', displayName: '유동성', weight: 0.10, criteria: '대규모 매매에 따른 체결 가능성' },
        { name: 'stopLossRiskManagement', displayName: '손절매/리스크관리', weight: 0.10, criteria: '손실 감수, 빠른 포지션 청산' }
      ]
    },
    {
      id: 'jim-simons',
      name: '짐 사이먼스',
      nameEn: 'Jim Simons',
      image: 'https://via.placeholder.com/200',
      philosophy: '수학 및 데이터 기반의 퀀트 투자 접근법',
      age: '87세',
      performance: '연 66% 복리(1988~2018)',
      assets: '$310억',
      characteristics: '르네상스 테크놀로지',
      portfolioLink: '최근 포트폴리오 보기',
      topStocks: [
        { symbol: 'NVDA', name: 'NVIDIA', score: 94, rank: 1 },
        { symbol: 'ASML', name: 'ASML Holding', score: 92, rank: 2 },
        { symbol: 'AVGO', name: 'Broadcom', score: 90, rank: 3 }
      ],
      metrics: [
        { name: 'mathematicalModels', displayName: '수학/통계 모델', weight: 0.25, criteria: '가격/패턴 예측용 알고리즘' },
        { name: 'automatedTrading', displayName: '자동화 트레이딩', weight: 0.20, criteria: '초단기 자동 매매 시스템' },
        { name: 'bigDataAnalysis', displayName: '빅데이터 분석', weight: 0.15, criteria: '수십 년간의 가격/거래 데이터 활용' },
        { name: 'riskManagement', displayName: '리스크 관리', weight: 0.10, criteria: '포지션별/포트폴리오별 VaR 등' },
        { name: 'correlation', displayName: '상관관계', weight: 0.08, criteria: '자산군/종목 간 상관관계 분석' }
      ]
    },
    {
      id: 'john-templeton',
      name: '존 템플턴',
      nameEn: 'John Templeton',
      image: 'https://via.placeholder.com/200',
      philosophy: '글로벌 투자와 시장 비관론 속에서 기회 발견',
      age: '95세',
      performance: '연 15%대 복리',
      assets: '수억불',
      characteristics: '글로벌 분산투자',
      portfolioLink: '마지막 포트폴리오 보기',
      topStocks: [
        { symbol: 'BABA', name: 'Alibaba', score: 87, rank: 1 },
        { symbol: 'TSM', name: 'Taiwan Semiconductor', score: 85, rank: 2 },
        { symbol: 'SONY', name: 'Sony Group', score: 83, rank: 3 }
      ],
      metrics: [
        { name: 'globalDiversification', displayName: '글로벌 분산', weight: 0.20, criteria: '국가/통화/산업별 분산' },
        { name: 'contrarian', displayName: '역발상(Contrarian)', weight: 0.18, criteria: '시장 비관/저평가 시 매수' },
        { name: 'lowPE', displayName: '저P/E', weight: 0.15, criteria: '시장 평균 이하 P/E' },
        { name: 'growth', displayName: '성장성', weight: 0.10, criteria: '신흥국/신산업 성장주 발굴' },
        { name: 'currencyRiskManagement', displayName: '환율 리스크 관리', weight: 0.10, criteria: '통화 다변화, 환헤지' }
      ]
    },
    {
      id: 'philip-fisher',
      name: '필립 피셔',
      nameEn: 'Philip Fisher',
      image: 'https://via.placeholder.com/200',
      philosophy: '기업 내부 조사와 품질 중심의 성장주 투자',
      age: '96세',
      performance: '수십년간 시장 상회',
      assets: '수억불',
      characteristics: '성장주 투자',
      portfolioLink: '마지막 포트폴리오 보기',
      topStocks: [
        { symbol: 'GOOGL', name: 'Alphabet', score: 93, rank: 1 },
        { symbol: 'ADBE', name: 'Adobe', score: 88, rank: 2 },
        { symbol: 'INTU', name: 'Intuit', score: 85, rank: 3 }
      ],
      metrics: [
        { name: 'growth', displayName: '성장성', weight: 0.25, criteria: '매출/이익의 장기적 성장성' },
        { name: 'managementQuality', displayName: '경영진 품질', weight: 0.20, criteria: '혁신성, 정직성, 실행력' },
        { name: 'rdInvestment', displayName: 'R&D 투자', weight: 0.15, criteria: '연구개발/혁신 투자 비중' },
        { name: 'marketShare', displayName: '시장 점유율', weight: 0.10, criteria: '업계 1~2위, 독점적 위치' },
        { name: 'profitMargin', displayName: '이익률', weight: 0.10, criteria: '높은 영업이익률/순이익률' }
      ]
    },
    {
      id: 'carl-icahn',
      name: '칼 아이칸',
      nameEn: 'Carl Icahn',
      image: 'https://via.placeholder.com/200',
      philosophy: '주주 가치 개선을 위한 행동주의 투자',
      age: '89세',
      performance: '행동주의로 시장 압도',
      assets: '$70억',
      characteristics: '경영권 개입',
      portfolioLink: '최근 포트폴리오 보기',
      topStocks: [
        { symbol: 'CVI', name: 'CVR Energy', score: 89, rank: 1 },
        { symbol: 'XRX', name: 'Xerox Holdings', score: 86, rank: 2 },
        { symbol: 'OXY', name: 'Occidental Petroleum', score: 84, rank: 3 }
      ],
      metrics: [
        { name: 'companyUndervaluation', displayName: '기업가치 저평가', weight: 0.20, criteria: '시장가치 < 내재가치' },
        { name: 'managementReplacement', displayName: '경영진 교체/개입', weight: 0.18, criteria: '비효율적 경영진 교체, 이사회 개입' },
        { name: 'stockBuyback', displayName: '자사주 매입', weight: 0.15, criteria: '대규모 자사주 매입 유도' },
        { name: 'dividendExpansion', displayName: '배당 확대', weight: 0.10, criteria: '주주환원 정책 강화' },
        { name: 'restructuringSale', displayName: '구조조정/매각', weight: 0.10, criteria: '비핵심자산 매각, 구조조정' }
      ]
    }
  ];
  
  function handleViewInvestor(investor) {
    setSelectedInvestor(investor);
    setHoveredInvestor(null);
  }
  
  function handleBack() {
    setSelectedInvestor(null);
  }

  function handleMouseEnter(investor) {
    setHoveredInvestor(investor);
  }

  function handleMouseLeave() {
    setHoveredInvestor(null);
  }
  
  // 메달 컴포넌트
  function Medal({ rank }) {
    const colors = {
      1: 'bg-yellow-500',
      2: 'bg-gray-300',
      3: 'bg-amber-600',
    };
    
    return (
      <div className={`${colors[rank] || 'bg-blue-200'} w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-xs`}>
        {rank}
      </div>
    );
  }

  // 말풍선 컴포넌트
  function Tooltip({ investor }) {
    if (!investor) return null;
    
    return (
      <div className="absolute -top-48 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 w-64 z-20">
        <div className="text-center mb-2">
          <h4 className="font-bold text-blue-600">{investor.name}의 추천 종목</h4>
        </div>
        <div className="space-y-2">
          {investor.topStocks.map((stock, index) => (
            <div key={stock.symbol} className="flex items-center gap-2">
              <Medal rank={index + 1} />
              <div className="flex-1">
                <div className="font-medium text-sm">{stock.symbol}</div>
                <div className="text-xs text-gray-600">{stock.name}</div>
              </div>
              <div className="text-blue-600 font-bold text-sm">{stock.score.toFixed(1)}</div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
      </div>
    );
  }

  // 투자자 카드 컴포넌트
  function InvestorCard({ investor }) {
    return (
      <div 
        className="relative group cursor-pointer transition-all hover:shadow-lg bg-white rounded-lg overflow-hidden transform hover:-translate-y-1" 
        onClick={() => handleViewInvestor(investor)}
        onMouseEnter={() => handleMouseEnter(investor)}
        onMouseLeave={handleMouseLeave}
      >
        {hoveredInvestor && hoveredInvestor.id === investor.id && (
          <Tooltip investor={investor} />
        )}
        
        <div className="relative h-48" style={{background: "linear-gradient(to bottom, #f0f9ff, #e2e8f0)"}}>
          {/* 투자자 이미지 */}
          <img 
            src={investor.image} 
            alt={investor.name} 
            className="absolute w-32 h-32 rounded-full border-4 border-white shadow-lg"
            style={{
              top: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              objectFit: "cover"
            }}
          />
          
          {/* 포트폴리오 링크 */}
          <div className="absolute top-2 right-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
            {investor.portfolioLink}
          </div>
          
          {/* 이름과 철학 */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-3 pt-6">
            <h3 className="text-lg font-bold text-white text-center">{investor.name}</h3>
            <p className="text-xs text-white opacity-90 text-center">{investor.philosophy}</p>
          </div>
        </div>
        
        <div className="p-3">
          <div className="text-xs grid grid-cols-2 gap-x-1 gap-y-0.5 mb-2">
            <div className="flex justify-between">
              <span className="text-gray-500">연령:</span>
              <span>{investor.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">자산:</span>
              <span>{investor.assets}</span>
            </div>
            <div className="col-span-2 flex justify-between">
              <span className="text-gray-500">성과:</span>
              <span className="text-right flex-1 pl-1">{investor.performance}</span>
            </div>
            <div className="col-span-2 flex justify-between">
              <span className="text-gray-500">특징:</span>
              <span className="text-right flex-1 pl-1">{investor.characteristics}</span>
            </div>
          </div>
          
          <div className="border-t pt-2 mt-1">
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

  // 투자자 상세 페이지
  function InvestorDetailPage({ investor }) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button 
          onClick={handleBack}
          className="mb-4 text-blue-600 flex items-center gap-1 hover:underline"
        >
          ← 돌아가기
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="h-56 relative" style={{background: "linear-gradient(to bottom, #f0f9ff, #e2e8f0)"}}>
            {/* 이미지 */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <img 
                src={investor.image} 
                alt={investor.name} 
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                style={{objectFit: "cover"}}
              />
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
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h1 className="text-3xl font-bold text-gray-800">{investor.name}</h1>
              <p className="text-gray-600">({investor.nameEn})</p>
              <p className="text-lg text-gray-700 mt-1">{investor.philosophy}</p>
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
                <h3 className="text-lg font-bold text-green-800 mb-2">주요 투자 지표</h3>
                <div className="space-y-2">
                  {investor.metrics.map((metric) => (
                    <div key={metric.name} className="flex items-center">
                      <div className="w-1/2">
                        <span className="font-medium">{metric.displayName}:</span>
                      </div>
                      <div className="w-1/2">
                        <div className="flex items-center">
                          <div className="h-2 bg-gray-200 rounded-full flex-1 mr-2">
                            <div 
                              className="h-full bg-blue-600 rounded-full" 
                              style={{ width: `${metric.weight * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{Math.round(metric.weight * 100)}%</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {metric.criteria}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Top 3 추천 종목</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {investor.topStocks.map((stock, index) => (
                  <div key={stock.symbol} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <Medal rank={index + 1} />
                      <span className="font-bold ml-2">{stock.  <Medal rank={index + 1} />
                      <span className="font-bold ml-2">{stock.symbol}</span>
                      <span className="text-blue-600 font-bold ml-auto">{stock.score.toFixed(1)}</span>
                    </div>
                    <div className="text-sm text-gray-600">{stock.name}</div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-500">
                        {investor.name}의 중요 지표 기준 {index + 1}위
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* 투자 기준 설명 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{investor.name}의 투자 철학</h3>
          <p className="text-gray-700 mb-4">{investor.philosophy}</p>
          
          <div className="mt-4">
            <h4 className="font-bold text-lg text-gray-800 mb-2">투자 기준</h4>
            <ul className="space-y-2">
              {investor.metrics.map(metric => (
                <li key={metric.name} className="flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <span className="font-medium">{metric.displayName}:</span> {metric.criteria}
                    <div className="text-xs text-gray-500">
                      가중치: {Math.round(metric.weight * 100)}%
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // 홈페이지
  function HomePage() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-4">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-1">대가차트</h1>
          <h2 className="text-lg text-gray-600">부자 따라 투자하기</h2>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {investors.map(investor => (
            <InvestorCard key={investor.id} investor={investor} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div 
            className="font-bold text-xl cursor-pointer" 
            onClick={handleBack}
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
        <InvestorDetailPage investor={selectedInvestor} />
      ) : (
        <HomePage />
      )}
      
      <footer className="bg-gray-800 text-white p-4 text-center text-sm mt-auto">
        <p>© 2025 부자따라 부자되기. 모든 권리 보유.</p>
      </footer>
    </div>
  );
}

export default InvestorApp;
