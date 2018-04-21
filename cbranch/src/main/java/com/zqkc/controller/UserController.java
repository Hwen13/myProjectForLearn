package com.zqkc.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mysql.fabric.xmlrpc.base.Array;
import com.zqkc.login.filter.LoginFilter;
import com.zqkc.model.User;
import com.zqkc.model.UserInformation;
import com.zqkc.service.IBannerService;
import com.zqkc.service.IBusinessService;
import com.zqkc.service.ICustomerService;
import com.zqkc.service.INavigationService;
import com.zqkc.service.IProjectService;
import com.zqkc.service.IRecruitService;
import com.zqkc.service.IServicesService;
import com.zqkc.service.IUserService;
import com.zqkc.service.impl.RecruitService;
import com.zqkc.util.StringUtil;

@Controller
@RequestMapping("/user")
public class UserController {

	private static final String PASSWORD = "123456"; // 用户默认密码

	@RequestMapping("/login")
	public String login(User user, HttpSession session, HttpServletRequest req) throws Exception {
		System.out.println("login------*********starts");
		System.out.println("User============" + user.getAccount() + "===a===" + user.getPassword() + "===b==="
				+ user.getIsdel() + "===c===" + user.getIslock() + "===d===" + user.getStatus());
		if (null != user.getAccount() && null != user.getPassword()) {
			System.out.println("user=================");
			User loginUser = userService.doLogin(user);
			System.out.println("loginUser1111111=================" + loginUser);
			if (loginUser != null) {
				System.out.println("loginUser22222222=================");
				String loginIp = StringUtil.getIpAddr(req);// 获取访问主机地址
				Date date = new Date();
				SimpleDateFormat dfm = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				String time = dfm.format(date);
				// 更新用户的数据
				loginUser.setLoginip(loginIp);
				loginUser.setLogintime(time);
				// 将登录用户存入用户登录缓存模块中
				// System.out.println("LoginFilter*****======="+LoginFilter.pushUser(session.getId(),
				// loginUser.getAccount(),loginUser.getLoginip()));
				System.out.println("session.getId()" + session.getId());
				System.out.println("session.getId()" + loginUser.getAccount());
				System.out.println("session.getId()" + loginUser.getLoginip());
				if (LoginFilter.pushUser(session.getId(), loginUser.getAccount(), loginUser.getLoginip())) {
					System.out.println("LoginFilter=================");
					userService.doUpdate(loginUser);
					session.setAttribute("user", loginUser);// 登录成功后，将用户信息存入session
					// 如果用户帐号是Admin则允许进入用户列表页面
					if (loginUser.getAccount().equals("admin")) {
						System.out.println("loginUser=====2222====11111" + loginUser.toString());
						session.setAttribute("listUser", "user/listUser");
						session.setAttribute("addUser", "user/addUser");
						session.setAttribute("saveUser", "user/save");
					} else {
						session.setAttribute("listUser", "user/index");
						System.out.println("loginUser=========2222222" + loginUser.toString());
					}
					return "redirect:index";// 登录成功之后的跳转
				} else {
					
					System.out.println("33333333333333");
					return "redirect:logon";// 登录失败之后的一个重定向
				}
			} else {
				session.setAttribute("message", "登录失败，请重新登录");
				System.out.println("ddddddddddddd");
				return "jsp/register";
			}

		}
		System.out.println("login------*********end");
		return "redirect:logon";// 登录失败之后的一个重定向
	}

	/**
	 * 用户退出，清空session
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/logout")
	public String logout(HttpSession session) throws Exception {
		System.out.println("logout------*********starts");
		if (session.getAttribute("user") != null) {
			LoginFilter.rmUserByKey(session.getId());// 删除用户登录缓存模块信息
			User user = ((User) session.getAttribute("user"));
			user.setStatus((byte) 1);// 数据库更新用户状态为离线
			user.setIslock((byte) 1);// 数据库更新解除锁定状态
			userService.doUpdate(user);
			session.removeAttribute("user");// 删除用户在session中的信息
			session.removeAttribute("listUser");
			session.removeAttribute("addUser");
			System.out.println("session=========" + session.toString());
		}
		System.out.println("logout------*********end");
		return "login";
	}

	/**
	 * 输错logon
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/register")
	public ModelAndView register(User user, HttpSession session, HttpServletRequest req) throws Exception {
		System.out.println("register------*********starts");
		System.out.println("User============" + user.getAccount() + "======" + user.getPassword());
		String account = req.getParameter("account");
		String password = req.getParameter("password");
		String spassword = req.getParameter("spassword");	
		ModelAndView md = new ModelAndView();
		System.out.println("==========" + account + "=========" + password + "========" + spassword);
		byte bi = 1;
		if (account != null && password != null && spassword != null && spassword.equals(spassword)) {
			System.out.println("1------------starts");
			byte b = 0;
			bi = 0;
			String loginIp = StringUtil.getIpAddr(req);// 获取访问主机地址
			Date date = new Date();
			SimpleDateFormat dfm = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String time = dfm.format(date);
			// 更新用户的数据
			user.setAccount(account);
			user.setPassword(password);
			user.setLoginip(loginIp);
			user.setLogintime(time);
			user.setIsdel(bi);
			user.setIslock(b);
			user.setStatus(b);
			int i_reg = userService.doSave(user);
			if (i_reg > 0) {
				System.out.println("i_reg------------starts");
				md.setViewName("login");

			} else {
				System.out.println("index111111------------starts");
				md.setViewName("register");

			}
		} else {
			System.out.println("md111=============" + md.getViewName());
			md.setViewName("register");
		}
		System.out.println("md2222=============" + md.getViewName());
		return md;
	}

	/**
	 * 输错logon
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/logon")
	public String logon() throws Exception {
		return "login";
	}

	/**
	 * 往后台跳转
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/index")
	public ModelAndView index(HttpSession session) throws Exception {
		System.out.println("index------*********starts");
//		User user=(User) session.getAttribute("user");
		ModelAndView md = new ModelAndView();
		if (session.getAttribute("user") != null) {
			session.setAttribute("sum", userService.countUser());
			session.setAttribute("sumbanners", bannerService.countBanners());
			session.setAttribute("sumbusiness", businessService.countBusiness());
			session.setAttribute("sumcustomers", customerService.countCustomers());
			session.setAttribute("sumrecruits", recruitService.countRecruit());
			session.setAttribute("sumnavigations", navigationService.countNavigation());
			session.setAttribute("sumprojects", projectService.doGetProjectNum());
			session.setAttribute("sumservices", servicesService.CountServices());
//			session.setAttribute("userInformation", userService.doLogin(user));
			System.out.println("index****========" + md.getViewName());
			md.setViewName("index");
		} else {
			md.setViewName("login");
		}
		System.out.println("index------*********end");
		return md;
	}

	/**
	 * 添加用户
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addUser")
	public String addUser() throws Exception {
		return "adduser";
	}

	/**
	 * 修改用户信息
	 * 
	 * @param user
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateUser")
	public String updateUser(User user) throws Exception {
		return "updateuser";
	}

	/**
	 * 进入用户列表页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/listUser")
	public ModelAndView listUser() throws Exception {
		ModelAndView md = new ModelAndView();
		md.addObject("users", userService.doList());
		md.setViewName("user_list");
		return md;
	}

	/**
	 * 保存用户信息
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/save")
	public ModelAndView save(HttpSession session, User user) throws Exception {
		ModelAndView md = new ModelAndView();
		if (userService.doSave(user) > 0) {
			md.addObject("users", userService.doList());
			md.setViewName("redirect:listUser");
		}
		md.setViewName("adduser");
		return md;
	}

	/**
	 * 做更新用户密码操作
	 * 
	 * @param session
	 * @param user
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/doUpdateUser")
	public String doUpdateUser(HttpSession session, User user) throws Exception {
		user.setPassword(StringUtil.entry(PASSWORD)); // 设置默认密码是123456
		userService.doChangePwd(user);
		return "redirect:listUser";
	}

	/**
	 * 删除用户
	 * 
	 * @param session
	 * @param user
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/doDeleteUser")
	public String delete(HttpSession session, User user) throws Exception {
		userService.doDelete(user);
		return "redirect:listUser";
	}
/**
 * search infomation 
 * @param session
 * @param user
 * @return
 * @throws Exception
 */
	@RequestMapping("/findInformation")
	@ResponseBody//此注解为向前端传值，此处不能省略 否则ajax无法解析返回值 
	public ModelAndView findInformation(HttpSession session) throws Exception{
		System.out.println("findInformation*************starts");
		ModelAndView md=new ModelAndView();
		User user=(User) session.getAttribute("user");
		UserInformation user_i=new UserInformation();
		System.out.println("account=========="+user.getAccount());
		System.out.println("userId=========="+user.getId());
		System.out.println("resutl=========="+user!=null);
		if(user.getAccount()!=null&&user.getId()>0) {
			System.out.println("account111=========="+user.getAccount());
			System.out.println("userId111=========="+user.getId());	
			List<UserInformation> u_list=new ArrayList<UserInformation>();	
			u_list=userService.dolistUserInformation(user);
			if(!u_list.isEmpty()) {				
				md.addObject("userInformation",u_list);
				md.setViewName("userInformation");
			}else {
				md.addObject("userInformation","登陆者资料不存在！");
				md.setViewName("index");
			}
			
			
		}else {
			md.addObject("userInformation","资料不存在！");
			md.setViewName("index");
		}
		
//		int userId=(Integer)session.getAttribute("id");
//		String account=(String)session.getAttribute("account");
		
		System.out.println("findInformation*************end");
		
		return md;
	}
	
	@Autowired
	private IUserService userService;
	@Autowired
	private IBannerService bannerService;
	@Autowired
	private IBusinessService businessService;
	@Autowired
	private INavigationService navigationService;
	@Autowired
	private IServicesService servicesService;
	@Autowired
	private IProjectService projectService;
	@Autowired
	private IRecruitService recruitService;

	@Autowired
	private ICustomerService customerService;

	public void setCustomerService(ICustomerService customerService) {
		this.customerService = customerService;
	}

	public void setUserService(IUserService userService) {
		this.userService = userService;
	}

	public void setBannerService(IBannerService bannerService) {
		this.bannerService = bannerService;
	}

	public void setBusinessService(IBusinessService businessService) {
		this.businessService = businessService;
	}

	public void setNavigationService(INavigationService navigationService) {
		this.navigationService = navigationService;
	}

	public void setServicesService(IServicesService servicesService) {
		this.servicesService = servicesService;
	}

	public void setProjectService(IProjectService projectService) {
		this.projectService = projectService;
	}

	public void setRecruitService(IRecruitService recruitService) {
		this.recruitService = recruitService;
	}

}
