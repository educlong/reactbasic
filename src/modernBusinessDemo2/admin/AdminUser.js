import React, { Component } from 'react';
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserSearch from './UserSearch';
/**
 * Cách kết nối trong cùng 1 component 
 *          => sử dụng state (VD tại User.js: sử dụng state displayStatus để thay đổi trạng thái hiển thị)
 * Cách kết nối từ component con sang component cha (Component cha ở đây là AdminUser.js)
 *          => sử dụng props (VD truyền function searchAllow từ component cha sang component con UserAdd)
 *              (function searchAllow đc lưu vào props displaySearch. tại component con nhận đc khi click vào btn Add User)
 * 
 * TÓM TẮT CÁCH ZAO TIẾP ZỮA 2 COMPONENT NGANG CẤP (phải thông qua 1 component cấp lớn hơn -> component cha AdminUser.js)
 * 
 *                                                                                                     Conponent con
 *                              |-----------function nhận, đc lưu vào props của component con------>>>  (UserAdd.js)
 *                              |                                                                           |
 *                       BƯỚC 1 |truyền         ____BƯỚC 2: component con thực hiện function này thông qua__|
 *                      function|searchAllow    |   props và truyền ngược lại cho component cha
 *                      của cha |cho con        |   _______________________________________________________________________
 *   Component cha              |               |  |(function searchAllow đc khai báo ở component cha AdminUser.js và thực |
 *  (AdminUser.js)              |               |  | hiện tại component con UserAdd.js. function searchAllow khi thực hiện |
 *  function: searchAllow-------| <<<-----------|  | sẽ thay đổi trạng thái của state allowDisplay trong component cha.    |
 *          |                                      |        |----->> trạng thái allowDisplay sẽ đc truyền vào component    |
 *  BƯỚC 3: |thực hiện                             |                 con UserSearch để cho phép hiển thị search hay ko     |
 *  function|searchAllow                           |_______________________________________________________________________| 
 *  làm thay|đổi trạng
 *      thái|của
 *     state|allowDisplay
 *          |
 *          v
 *  state: allowDisplay            BƯỚC 4: trạng thái của allowDisplay sau khi thay đổi đc truyền            Component con
 *          |----------------------------->>qua component UserSearch để cho phép hiển thị hay ko--------->>>(UserSearch.js)
 *                                           (component con UserSearch nhận đc thông qua props)       
 */




/**Đẩy data từ User.json vào page Admin */
import Users from '../Users.json'


/**Logic: xử lý hết phần logic, các hàm xử lý dữ liệu ở component cha hết 
 * (component con chỉ thu thập dữ liệu từ component cha đẩy về)*/
class AdminUser extends Component {
    constructor(props) {
        super(props);   /**để thay đổi trạng thái của UserSearch từ UserAdd => chỉ cần thay đổi trạng thái của */
        this.state ={   /**state allowDisplay này. Truyền zá trị state này cho component UserSearch. Do đó chỉ để 2*/
            allowDisplay: true,  /**component con là UserSearch từ UserAdd kết nối vs nhau thì phải thông qua state*/
            users:Users, /** allowDisplay của component cha.     Đưa data từ Users.json vào và lưu và state users*/
            keySearch:"",
        }   
    }
    
    /*XỬ LÝ CHO PHÉP HIỂN THỊ KHỐI SEARCH HAY KO->ban đầu hiển thị khối search,nếu nhấn vào nút Add User thì tắt hiển thị*/
    searchAllow=()=>{/**Cách kết nối từ component con sang component cha => sử dụng props (VD truyền function searchAllow*/
        this.setState({allowDisplay: !this.state.allowDisplay});/* từ component cha sang component con UserAdd)*/
    }   /*(function searchAllow đc lưu vào props displaySearch. tại component con nhận đc khi click vào btn Add User)*/

    
    /**XỬ LÝ CHỨC NĂNG SEARCH */
    search=(keys)=>{ /**Làm tương tự đối với component UserSearch và UserList (truyền function search qua UserSearch,*/
        // console.log(key)/* UserSearch thực hiện funtion này và đổ kết quả về cho AdminUser.js, AdminUser.js đưa kết*/
        this.setState({keySearch: keys});/**quả vào UserList để hiển thị ra view). Sau khi đổ kết quả về cho AdminUser*/
    }/*thì lưu kq này vào state. Sau khi lưu kq vào state. Từ state này lọc ra những user cần tìm thông qua userList*/

    /**XỬ LÝ CHỨC NĂNG ADD USER */
    getNewUser=(newUser)=>{
        var usersAdd=this.state.users;      /**sau khi lấy đc data từ UserAdd.js => đẩy data vào Users.json*/
        if (newUser.username && newUser.email && newUser.datecreate) 
            usersAdd.push(newUser);         /**nếu có đầy đủ username, email và datecreate mới đẩy vào usersAdd*/
        // console.log(this.state.users);   /**đẩy vào state xong thì cập nhật lại state bằng setState*/
        this.setState({users:usersAdd });   /**sau khi add xong thì đẩy data vào localstorage */
        localStorage.setItem("userList",JSON.stringify(this.state.users))
    }

    /**XỬ LÝ CHỨC NĂNG UPDATE USER */
    updateUser=(userUpdate)=>{
        // console.log(userUpdate);
        this.state.users.forEach((value, key)=>{/*kiểm tra id của user sau khi update thì thay thế =userUpdate*/
            if(value.id===userUpdate.id)
                if (userUpdate.username && userUpdate.email && userUpdate.datecreate){/*nếu có data mới cho update*/
                    value.username=userUpdate.username;
                    value.email=userUpdate.email;
                    value.authority=userUpdate.authority;
                    value.isdelete=userUpdate.isdelete;
                }
        })/**sau khi update xong thì đẩy data vào localstorage */
        localStorage.setItem("userList",JSON.stringify(this.state.users))
        // console.log(this.state.users);
    }


    
    /*TRƯỚC HẾT: Đưa tất cả data lấy đc vào storage để lưu trữ thành 1 csdl local trên trình duyệt. CHú ý phải
    * chuyển sang dạng JSON để localStorage có thể hiển thị. Khi lấy ra thì zải mã ngược lại thành mảng để duyệt:*/
    componentWillMount() {/**NHƯNG chú ý trước khi render phải check xem có localStorage hay chưa check, tại vì*/
        // console.log(localStorage.getItem("userList"));/**đề phòng là có rồi,có rồi thì ko cần khởi tạo lần 2 nữa*/
        if (localStorage.getItem("userList")===null)   /**Ở đây check chưa có thì khởi tạo mới bảng dữ liệu*/
            localStorage.setItem("userList",JSON.stringify(Users)) /**ban đầu từ User.json. Chú ý đổi sang JSON*/ 
        else{ /**còn nếu có data rồi thì lấy ra và update lại thôi*/
            this.setState({ /**lấy ra thì phải zải mã lại: parse, và đưa vào state để lưu trữ*/
                users: JSON.parse(localStorage.getItem("userList"))
            });
        }
    }

    render(){
        /**Cách 1 */
        var userList=[];  /**tạo 1 mảng rỗng chứa kết quả tìm thấy khi search */
        // if(this.state.keySearch==="") userList=this.state.users;
        this.state.users.forEach((userItem)=>{  /**duyệt hết các phần tử trong data users, lấy từng user ra, và check*/
            if (userItem.username && userItem.email && userItem.datecreate) /**phải có đủ name, mail, date mới search*/
                if (   userItem.username.toLowerCase().indexOf(this.state.keySearch) !== -1/**hàm indexOf: tìm kiếm,*/
                    || userItem.email.toLowerCase().indexOf(this.state.keySearch) !== -1   /**!== -1 tức là có mặt */
                    || userItem.datecreate.toLowerCase().indexOf(this.state.keySearch) !== -1)
                userList.push(userItem)   /**nếu tìm thấy thì đẩy zá trị user vào mảng userList*/
        })
        /**Cách 2:  -> sử dụng hàm filter để lọc ra user nào trùng vs key*/
        // var userList=this.state.users;
        // if (this.state.keySearch !== "")
        //     userList=this.state.users.filter(userItem => (userItem.username === this.state.keySearch
        //                     || userItem.email === this.state.keySearch || userItem.datecreate === this.state.keySearch))
        // console.log(userList);

        return( /**  */
            <div className="container"> {/**khi lấy ra thì zải mã ngược lại thành mảng để duyệt: JSON.parse(<mảng>) */}
                <div className="jumbotron"> {/**NHƯNG chú ý trước khi render phải check xem có localStorage hay chưa*/}
                    <h1 className="display-5">Add User and user list</h1>{/**check tại componentWillMount */}
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <hr className="my-4" /> 
                
                    <UserAdd searchAllow={()=>this.searchAllow()} getNewUser={(newUser)=>this.getNewUser(newUser)}/>
                </div>{/**thực hiện function searchAllow để thay đổi state allowDisplay tại component này (UserAdd.js)*/}

                <div className="card">
                    <div className="card-header no-bg b-a-0">Dữ liệu người dùng</div>{/*truyền state từ component cha qua*/}
                    <div className="card-block">{/*component UserSearch. state này trong component UserSearch là 1 props,*/}
                
                        <UserSearch searchAllow={this.state.allowDisplay} search={(keys)=>this.search(keys)}/>{/*tươngtự*/}
                        <div className="table-responsive" style={{overflowX:'hidden'}}>{/*vs search lấy ra thôngqua props*/}

                            <UserList users={userList} updateUser={(userUpdate)=>this.updateUser(userUpdate)}/>
                        </div>{/**đưa dữ liệu users tìm đc (userList) ra list để hiển thị.*/}
                    </div> {/**updateUser truyền cho component con UserList từ componet con UserList truyền tiếp đến */}
                </div>{/**component cháu User.js để thực hiện update user */}
            </div>
        );
    }
}

export default AdminUser;