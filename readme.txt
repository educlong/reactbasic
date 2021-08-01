/*
    ______ REACT JS ____________
    Bước 1: Tạo 1 folder lưu trữ toàn bộ project trong visual studio code (Reactjs)
    Bước 2: Trong trình soạn thảo code, Chuột phải vào folder vừa tạo -> chọn Open in Intergrated Terminal
    Bước 3: trong màn hình terminal dưới màn hình soạn thảo, Cài đặt React js , gõ: npm install -g  create-react-app 
    Bước 4: Hệ thống tự động cài đặt 1 bộ khung application trong ổ C
    Bước 5: Để tạo ra 1 folder trong project 
        (folder này trùng tên vs tên project, folder này chứa sẵn các folder cần sử dụng cho 1 dự án dùng react)
            gõ code trong terminal: create-react-app <tên folder> => Enter (create-react-app reactbasic => Enter)
    Bước 6: Các khái niệm: 
            - Các cách định nghĩa component  -> có 4 cách để định nghĩa function. 
            - props trong react -> truyền tham số cho component thông qua props (params). Khái niệm map (zống foreach)
            - JSX trong react (JSX: javascript extention) -> là 1 file mở rộng cho phép viết code html trong file js
                sử dụng công cụ html to jsx của react cung cấp để chuyển đổi html là jsx (https://magic.reactjs.net/htmltojsx.htm)
            - state trong component (zống biến private trong 1 class của OOP, nhưng state có kiểu object, =scope trong angular)
            - sử dụng defaultValue hiển thị title lên input
            - Khái niệm ref để lưu zá trị lại trong input (k cần phải render lại các thông số)
        :::PHẦN 1: LIFECYCLE
            - Lifecycle: vòng đời của 1 component, là tập hợp các hàm mà react đã dựng sẵn (zải thích trong file Secion.js)
    
        :::PHẦN 2: ROUTER
    Bước 7: Cài đặt module React Router để xử lý router, gõ: npm install --save react-router-dom
    Bước 8: Tạo 1 file trong modernBusinessDemo2\Router.js để thực hiện router
        Để sử dụng, xem quick start tại https://reactrouter.com/web/guides/quick-start
    Bước 9: Để xử lý ko load lại webpage, -> thay thẻ a thành thẻ NavLink trong Navigation.js
        (xử lý Router tại 3 file: Navigation.js, App.js và RouterDemo2.js)
    Bước 10: Tạo dữ liệu json để demo database tại modernBusinessDemo2\Data.json, 
        load dữ liệu này vào modernBusinessDemo2\index\SectionBlogs.js và  modernBusinessDemo2\blogs\home\SectionBlogs.js,
        dữ liệu này đc đổ qua file modernBusinessDemo2\SectionBlog.js để hiển thị lên view
    Bước 11: Tạo link friendly cho user -> xử lý tại modernBusinessDemo2\SectionBlog.js
    Bước 12: Dùng function slug để conver link friendly sang vietnamese, add thêm function này tại SectionBlog.js
        Đồng thời chỉnh sửa lại Route trong file RouterDemo2.js để phù hợp vs function slug
    Bước 13: Tại RouterDemo2.js, để truyền id qua BlogPostDemo2.js, cần render và đưa thông tin bao gồm slugdemo2 và id
        vào props rồi truyền qua. Tại BlogPostDemo2.js dựa trên id đc truyền qua, lấy ra và hiển thị thông tin
    
        :::PHẦN 3: XỬ LÝ FORM và REDIRECT
    Bước 14: xử lý form, thực hiện trong folder modernBusinessDemo2/contact, các file ContactDemo2.js, Forms.js
        
        ::: PHẦN 4: XỬ LÝ PAGE ADMIN (file modernBusinessDemo2\admin\AdminUser.js)  
 *   TÓM TẮT CÁCH ZAO TIẾP ZỮA 2 COMPONENT NGANG CẤP (phải thông qua 1 component cấp lớn hơn -> component cha AdminUser.js)
 * 
 *                                                                                                     Conponent con
 *                              |-----------function nhận, đc lưu vào props của component con------>>>  (UserAdd.js)
 *                              |                                                                           |
 *                       BƯỚC 1 |truyền     ____BƯỚC 2: component con thực hiện function này thông qua______|
 *                              |function   |   props và truyền ngược lại cho component cha
 *                              |của cha    |       _______________________________________________________________________
 *   Component cha              |cho con    |      |(function searchAllow đc khai báo ở component cha AdminUser.js và thực |
 *  (AdminUser.js)              |           |      | hiện tại component con UserAdd.js. function searchAllow khi thực hiện |
 *  function: searchAllow-------| <<<-------|      | sẽ thay đổi trạng thái của state allowDisplay trong component cha.    |
 *          |                                      |        |----->> trạng thái allowDisplay sẽ đc truyền vào component    |
 *  BƯỚC 3: |thực hiện                             |                 con UserSearch để cho phép hiển thị search hay ko     |
 *  function|searchAllow                           |_______________________________________________________________________| 
 *  làm thay|đổi trạng
 *      thái|của
 *     state|allowDisplay
 *          |
 *          v
 *  state: allowDisplay                 BƯỚC 4: trạng thái của allowDisplay sau khi thay đổi đc truyền      Component con
 *          |-------------------->>         qua component UserSearch để cho phép hiển thị hay ko--------->>>(UserSearch.js)
        
    Bước 15: XỬ LÝ SEARCH -> sử dụng function index0f (xem tại component AdminUser.js)
    Bước 16: Xử lý ID random ngẫu nhiên ko trùng lặp UUID, gõ: npm install uuid
    Bước 17: Thêm, sửa, xóa Quy trình làm phải sử dụng cách zao tiếp zữa các component như mô tả trên
    
    Bước 18: Lưu trữ csld tạm trên local storage (xem xử lý trong AdminUser.js)
            --> hàm set:    localStorage.setItem("key1", "value1")
                hàm get:    localStorage.getItem("key1)
                hàm remove: localStorage.removeItem("key1")
        Chú ý:  đổi data từ mảng sang dạng json: VD-> JSON.stringify(userList)
                đổi từ json sang data dạng mảng: VD-> JSON.parse(userList)

    :::PHẦN CUỐI: ĐÓNG GÓI ỨNG DỤNG: -> gõ: npm run build -> hệ thống sẽ đóng gói thành 1 file build, upload file build này lên server (website và chạy)
    Bước 19: Để chạy trên server xampp, copy tất cả các file trong folder build vừa tạo ra, paste vào folder 
        \xamppserver\htdocs\nodejsReactjs\reactjsBasic với 2 folder nodejsReactjs\reactjsBasic để lưu trữ project này trên server.
    Bước 20: Run, mở folder chứa project trên xampp: \xamppserver\htdocs\nodejsReactjs\reactjsBasic,
        chuột phải -> chọn Open PowerShell window here -> gõ: npm install -g serve -> enter, sau đó gõ: serve -s
        -> project sẽ tự động run trên cổng 5000

    BƯỚC 21: Đưa project lên github
        21.1: gõ: git init -> enter để khởi tạo responsitary
        21.2: gõ lệnh kết nối đến đường dẫn trong tài khoản github, VD: git remote add origin https://github.com/educlong/reactbasic.git
        21.3: để upload lên, gõ: git add * -> enter
        21.4: tạo version, gõ: git commit -m "<comment name>" (copy từ hướng dẫn trong tài khoản github)
        21.5: tiến hành upload, gõ: git push origin master -> enter
        21.6: github sẽ hỏi tài khoản -> tự động kết nối vs github và upload code lên

    

    VD1: Web one page (trong public tạo folder onePageDemo1 để lưu trữ các file css, js của project onePageDemo1)
    Bước 7: config lại các link css, js để link đến public/onePageDemo1/css hay js trong public/index.html (xử lý tại index.html)
    Bước 8: Tạo 1 folder để lưu trữ các component của project này: src/componentOnepageDemo1 (phân tách zao diện ra nhiều phần)
        8.1: Tạo các component (VD: NavigationHeader.js) -> sau đó link component này vào App.js (mở App.js để xử lý)
            Phần này chú ý truyền props vào thuộc tính className. Trong các component viết hàm thì chú ý các lưu ý



    __________REDUX JS ________________
    Bước 1: cài đặt redux, gõ: npm install redux --save -> enter
    Bước 2: Cài đặt module react-redux, gõ: npm install react-redux -> enter
    Bước 3: zải thích các khái niệm: store, reducer, action trong Store/Store.js.
    Bước 4: Trích xuất dữ liệu trong Store ra component đc zải thích qua 4 bước 
        trong 3 file Store/Store.js, portfolioReduxjsBasic/IndexRedux.js và index.js
        (Có thể truyền tham số vào dispatch để gửi lên store xử lý -> file portfolioReduxjsBasic\overview\ProjectUpdate.js, xem tại FIREBASE)
    
        VD về 1 project REDUX JS -> file portfolioReduxjsBasic\overview\PortfolioOverview.js
        Để dễ theo dõi về store, xem ví dụ về Alerts.js (chi tiết để tạo Alert tại phần dưới - phần FIREBASE)
    
    ________FIREBASE________________
    Bước 5: Sử dụng firebase để tạo database cho PortfolioOverview.js 
            (hướng dẫn chi tiết tại bài 3 chương 54: https://console.firebase.google.com/u/0/)
    Bước 6: Để kết nối vs firebase -> cài module firebase, gõ: npm install firebase --save
    Bước 7: Copy code config cho firebase trên firebase, paste vào file portfolioReduxjsBasic\FirebaseConfig.js
    Bước 8: Sau khi config thì file nào sử dụng thì import firebase vào file đó, 
        ProjectUpdate.js sử dụng thì import firebase vào ProjectUpdate.js
    Bước 9: thêm, sửa, xóa data từ firebase: toàn bộ data trong firebase đc lưu trong 1 khái niệm đgl datasnapshot
        -> lấy data và update data trong FirebaseConfig.js
        -> insert, delete data trong file ProjectUpdate.js
    Bước 10: Tạo Store lưu trữ firebase trong Store/StoreFirebase.js
        và import store này vào Store\Store.js

    _____MODULE NOTIFIER hiển thị thông báo trong redux
    Bước 11: Cài thêm plugin Notifier để hiển thị thông báo, gõ: npm install react-bs-notifier --save
    Bước 12: Định nghĩa 1 component trong src (Alerts.js)






    _______KẾT NỐI REACTJS VỚI NODE JS ĐỂ THAO TÁC DATA_________

    TẠI BACKEND (folder nodeBackend)
    Bước 13: Tại folder lưu trữ toàn bộ project trong visual studio code (ReactJs). 
        Trong trình soạn thảo code, Chuột phải vào folder ReactJs -> chọn Open in Intergrated Terminal
    Bước 14: trong màn hình terminal của folder ReactJs dưới màn hình soạn thảo, gõ đoạn code: npm install express-generator -g => Enter
        ---> Hệ thống tự động cài đặt 1 bộ khung application trong ổ C
    Bước 15: Tạo 1 folder backend nodejs trong file ReactJs  
        (folder này trùng tên vs tên project, folder này chứa sẵn các folder cần sử dụng cho 1 dự án dùng express)
            gõ code trong terminal của ReactJs: express <tên folder> -e => Enter (express nodeBackend -e => Enter)
    Bước 16: Cài đặt thêm các module tương ứng vs các require trong file nodeBackend/app.js
        Để cài thêm, trong visual studio code, chuột phải vào folder nodeBackend => chọn Open in Intergrated Terminal
        Trong màn hình terminal, gõ: npm install => Enter, hệ thống sẽ tự động install tất cả những module có trong app.js
        (Để ý trong file package.json có mục dependencies liệt kê ra những version của các module hỗ trợ cho framework này)
        Do đó, ở đây chỉ cần gõ: npm install thì hệ thống sẽ tự động tìm những module này và cài đặt luôn 
        => Hệ thống sẽ tự động tạo ra folder node_modules chứa tất cả những modules này
    Bước 17: Trước khi kết nối vs react ---> cần đổi cổng kết nối của nodejs, vào nodeBackend/bin/www 
        -> đổi cổng sang cổng 4000 tránh trùng vs cổng của react
    Bước 29: Cài đặt thêm 1 module để zao tiếp vs postgresql trong nodejs, gõ: npm install pg
        XỬ LÝ KẾT NỐI DATABASE POSTGRESQL TRONG FILE routes/indexFQA.js
    Bước 30: Tạo 1 đường dẫn API trong routes/indexFQA.js và app.js để truyền qua frontend truy cập vào database
    Bước 31: Xác nhận ở frontend ai lấy đc data từ backend bằng thuộc tính access control allow method
        để xác nhận ở phía frontend lấy đc dữ liệu bằng đường dẫn nào!

    
    TẠI FRONTEND (folder reactbasic)
    Bước 31: Cài đặt thêm module để connect vs backend, tại terminal của reactbasic, gõ: npm install axios
    Bước 32: Lưu toàn bộ data nhận đc vào store (StoreFQA.js)
    Bước 33: Từ FQADemo2, gọi data từ store (StoreFQA.js) lấy ra và đổ lên view
    Bước 34: Chú ý, khi insert data từ frontend lên backend thì bị lỗi Access-Control-Allow-Origin
        ==> Để fix lỗi này cần setup proxy cho frontend tại reactbasic/package.json (line 45)

*/