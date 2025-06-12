import ReactDOM from "react-dom/client"; // For React 18+
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import { Home } from "./components/pages/Home.jsx";
import { News } from "./components/pages/News.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import { Register } from "./components/pages/Register.jsx";
import ChatBot from "react-chatbotify";
import chatLogo from "./assets/circleLogo.png"

const settings = {
  general: {
		primaryColor: "#0ec943",
		secondaryColor: "#111211"
  },
  chatButton: {
		icon: chatLogo,
	},
  header: {
    avatar: chatLogo,
    title: "Golf Love"
  }
}

const startOption = ["Kiến thức chung", "Kỹ thuật chơi golf", "Sân golf Việt Nam", "Đăng ký lớp chơi golf miễn phí"];
const KienThucChungOption = [
        "Kiến thức chung về golf",
        "Sân golf có bao nhiêu lỗ?",
        "Par trong golf là gì?",
        "Điểm số trong golf được tính như thế nào?",
        "Cần chuẩn bị gì khi ra sân golf?",
        "Nghi thức trên sân golf"
      ]
const KyThuatChoiGolfOption = ["Kỹ thuật chơi golf",
        "Kỹ thuật Swing là gì?",
        "Các loại cú đánh cơ bản trong golf?",
        "Cách cầm gậy golf?",
        "Tư thế đứng đánh golf?"]
const SanGolfVNOption = [
        "Sân golf miền Bắc",
        "Sân golf miền Trung",
        "Sân golf miền Nam"
      ]
const TamQuanTrongCuaKyThuatOption = [
        "Tại sao phải chơi golf đúng kỹ thuật?",
        "Tại sao nên học với huấn luyện viên?"
      ]
const DangKyLopHocMienPhi = [
         "Làm thế nào để đăng ký học?"
]
const continueMenu = [
  "Tìm hiểu thêm",
  "Đăng ký lớp học"
]

const flow = {
		start: {
			message: "Chào mừng bạn đến với Golf Love, tôi có thể hỗ trợ gì cho bạn?",
			transition: {duration: 1000},
			path: "startOption"
		},
		startOption: {
			message: "Hãy bắt đầu với",
			options: startOption,
			path: "process_options"
		},
		prompt_again: {
			message: "Bạn cần hỗ trợ gì khác không?",
			options: startOption,
			path: "process_options"
		},
		unknown_input: {
			message: "Xin lỗi, điều bạn yêu cầu chưa được hỗ trợ, chúng tôi sẽ cập nhật trong thời gian tới, thay vào đó hãy bắt đầu bằng:",
			options: startOption,
			path: "process_options"
		},
		process_options: {
			transition: {duration: 0},
			chatDisabled: true,
			path: (params) => params.userInput
		},
    'Kiến thức chung':{
      message: "Bạn muốn biết về",
			transition: {duration: 1000},
			path: "KienThucChung"
    },
    KienThucChung: {
			message: "Hãy bắt đầu với",
			options: KienThucChungOption,
			path: "process_KienThucChung"
		},
    process_KienThucChung: {
			transition: {duration: 0},
			chatDisabled: true,
			path: (params) => params.userInput
		},
    "Kiến thức chung về golf":{
      message: "Golf là một môn thể thao mà người chơi sử dụng nhiều loại gậy khác nhau để đánh một quả bóng nhỏ vào một loạt các lỗ trên sân trong số lần đánh ít nhất có thể.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Sân golf có bao nhiêu lỗ?":{
      message: "Một sân golf tiêu chuẩn thường có 18 lỗ. Tuy nhiên, cũng có những sân 9 lỗ hoặc 36 lỗ.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Par trong golf là gì?":{
      message: "'Par' là số gậy tiêu chuẩn mà một golfer chuyên nghiệp được kỳ vọng sẽ hoàn thành một lỗ hoặc toàn bộ vòng golf. Mỗi lỗ sẽ có par 3, par 4 hoặc par 5 tùy thuộc vào độ dài của nó.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Điểm số trong golf được tính như thế nào?":{
      message: "- **Ace (Hole-in-one):** Đánh bóng vào lỗ chỉ bằng một cú đánh duy nhất.\n- **Eagle:** Dưới par 2 gậy ở một lỗ.\n- **Birdie:** Dưới par 1 gậy ở một lỗ.\n- **Par:** Bằng số gậy tiêu chuẩn.\n- **Bogey:** Vượt par 1 gậy ở một lỗ.\n- **Double Bogey:** Vượt par 2 gậy ở một lỗ.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Cần chuẩn bị gì khi ra sân golf?":{
      message: "Bạn sẽ cần một bộ gậy golf (tối đa 14 gậy), bóng golf, tee (dụng cụ đặt bóng), găng tay, giày golf chuyên dụng và trang phục phù hợp với quy định của sân.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Nghi thức trên sân golf":{
      message: "- **Tôn trọng người chơi khác:** Giữ im lặng khi người khác đang đánh bóng.\n- **Tốc độ chơi:** Duy trì tốc độ chơi phù hợp để không làm ảnh hưởng đến nhóm sau.\n- **Chăm sóc sân:** Cào lại các hố cát, sửa lại các vết bóng trên green.\n- **An toàn:** Luôn đảm bảo không ai đứng quá gần khi bạn vung gậy.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    'Kỹ thuật chơi golf':{
      message: "Bạn muốn biết về",
			transition: {duration: 1000},
			path: "KyThuatChoiGolf"
    },
    KyThuatChoiGolf: {
			message: "Hãy bắt đầu với",
			options: KyThuatChoiGolfOption,
			path: "process_KyThuatChoiGolf"
		},
    process_KyThuatChoiGolf: {
			transition: {duration: 0},
			chatDisabled: true,
			path: (params) => params.userInput
		},
    "Kỹ thuật Swing là gì?":{
      message: "Swing là chuyển động xoay người để đánh bóng đi xa và chính xác. Đây là kỹ thuật nền tảng và quan trọng nhất trong golf. Một cú swing tốt đòi hỏi sự phối hợp nhịp nhàng của toàn bộ cơ thể từ tay, vai, hông đến chân.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Các loại cú đánh cơ bản trong golf?":{
      message: "- **Drive:** Cú phát bóng từ tee box, thường dùng gậy driver để đạt khoảng cách xa nhất.\n- **Approach:** Cú đánh tiếp cận green sau cú phát bóng.\n- **Chip:** Cú đánh ngắn, thấp và lăn nhiều khi bóng ở gần green.\n- **Putt:** Cú gạt bóng trên green để đưa bóng vào lỗ.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Cách cầm gậy golf?":{
      message: "Có ba kiểu cầm gậy chính:\n- **Overlapping Grip (Vardon Grip):** Ngón út của tay phải đè lên kẽ giữa ngón trỏ và ngón giữa của tay trái (đối với người thuận tay phải).\n- **Interlocking Grip:** Ngón út của tay phải và ngón trỏ của tay trái lồng vào nhau.\n- **Baseball Grip (Ten-Finger Grip):** Cầm gậy như cầm một cây gậy bóng chày, tất cả 10 ngón tay đều tiếp xúc với cán gậy.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Tư thế đứng đánh golf?":{
      message: "Một tư thế tốt cần đảm bảo sự cân bằng và ổn định. Hai chân mở rộng bằng vai, đầu gối hơi chùng, lưng giữ tương đối thẳng và nghiêng người về phía trước từ phần hông.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    'Sân golf Việt Nam':{
      message: "Bạn muốn biết về",
			transition: {duration: 1000},
			path: "SanGolfVN"
    },
    SanGolfVN: {
			message: "Hãy bắt đầu với",
			options: SanGolfVNOption,
			path: "process_SanGolfVN"
		},
    process_SanGolfVN: {
			transition: {duration: 0},
			chatDisabled: true,
			path: (params) => params.userInput
		},
    "Sân golf miền Bắc":{
      message: "- **Sân golf Sky Lake (Hà Nội):** Nổi bật với hai sân 18 lỗ Sky và Lake, mang đến những thử thách đa dạng giữa khung cảnh núi non hùng vĩ.\n- **Vinpearl Golf Hải Phòng:** Tọa lạc trên đảo Vũ Yên, sở hữu thiết kế độc đáo với sân Hồ và sân Đầm lầy.\n- **FLC Ha Long Bay Golf Club (Quảng Ninh):** Có tầm nhìn ngoạn mục bao quát Vịnh Hạ Long.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Sân golf miền Trung":{
      message: "- **Laguna Lăng Cô Golf Club (Huế):** Được thiết kế bởi Sir Nick Faldo, sân golf mang đến trải nghiệm độc đáo giữa biển và núi.\n- **BRG Da Nang Golf Resort (Đà Nẵng):** Sở hữu hai sân được thiết kế bởi Greg Norman và Jack Nicklaus.\n- **Hoiana Shores Golf Club (Quảng Nam):** Là một sân golf dạng links ven biển tuyệt đẹp.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    "Sân golf miền Nam":{
      message: "- **The Bluffs Ho Tram Strip (Bà Rịa - Vũng Tàu):** Được thiết kế bởi huyền thoại Greg Norman, liên tục được xếp hạng trong số những sân golf tốt nhất thế giới.\n- **Sân golf Tân Sơn Nhất (TP.HCM):** Vị trí đắc địa ngay gần sân bay, rất thuận tiện.\n- **Vinpearl Golf Phú Quốc:** Khám phá trải nghiệm chơi golf giữa khu rừng nguyên sinh hoang sơ tại đảo ngọc.",
      transition: {duration: 1000},
      path: "TimHieuThem"
    },
    'Đăng ký lớp chơi golf miễn phí':{
      message: "Bạn muốn biết về",
			transition: {duration: 1000},
			path: "DangKyChoiGolf"
    },
    DangKyChoiGolf: {
			options: DangKyLopHocMienPhi,
			path: "process_DangKyChoiGolf"
		},
    process_DangKyChoiGolf: {
			transition: {duration: 0},
			chatDisabled: true,
			path: async (params) => {
				let link = "";
				switch (params.userInput) {
				case "Làm thế nào để đăng ký học?":
					link = "https://www.lovegolfvn.com/register";
					break;
				default:
					return "unknown_input";
				}
				await params.injectMessage("Hãy đăng ký theo form này nhé!");
				setTimeout(() => {
					window.open(link);
				}, 2000)
				return "repeat"
			},
		},
    TimHieuThem: {
			options: continueMenu,
			path: "process_TimHieuThem"
		},
    process_TimHieuThem: {
      transition: {duration: 1000},
			chatDisabled: true,
			path: (params) => params.userInput
		},    
    "Tìm hiểu thêm":{
      transition: {duration: 1000},
      path: 'startOption'
    },
    "Đăng ký lớp học":{
      transition: {duration: 1000},
      path: 'Đăng ký lớp chơi golf miễn phí'
    },
		repeat: {
			transition: {duration: 3000},
			path: "prompt_again"
		},
	}

  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <>
    <ChatBot flow={flow} settings= {settings}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      </Routes>
    </BrowserRouter>
  </>
);
