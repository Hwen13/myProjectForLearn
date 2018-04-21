package com.zqkc.controller;


import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.support.HttpRequestHandlerServlet;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.sun.net.httpserver.HttpContext;
import com.zqkc.model.Project;
import com.zqkc.service.IProjectService;
import com.zqkc.util.FileUploadUtils;
import com.zqkc.util.StringUtil;

@Controller
@RequestMapping("/project")
@Validated
public class ProjectController {

	@Autowired
	private IProjectService proService;

	public void setProjectService(IProjectService proService) {
		this.proService = proService;
	}
	StringUtil strUtil=new StringUtil();
    List<String> u_list=new ArrayList<String>();
	/**
	 * 添加项目案例处理
	 * 
	 * @param session
	 * @param project
	 * @return
	 * @throws Exception
	 */

	@RequestMapping("/addProject")
	public ModelAndView addProjectController(HttpSession session, Project project,
			@RequestParam(value = "file", required = false) MultipartFile[] files) throws Exception {
        System.out.println("addProject-------****starts");
		ModelAndView mv = new ModelAndView();
		// for (int i = 0; i < files.length; i++) {
		// if(!files[i].isEmpty()){
		// System.out.println("保存图片到服务器和数据库中"+files[i].getOriginalFilename());
		// Project pf=FileUploadUtils.uploadProjectFile(session, files[i]);//保存图片到服务器
		// System.out.println("文件路径："+pf.getPath());
		// project.setPath(pf.getPath());//将新的图片地址保存到数据库里
		// }else{
		// mv.setViewName("projectAdd");
		// }
		// }
		boolean flag = proService.doAddProject(project);
		if (flag) {
			mv.setViewName("redirect:findProjectAll");
			System.out.println("addProject-------****end"+flag);			
		} else {
			mv.setViewName("projectAdd");
			System.out.println("addProject-------****end"+flag);
		}
		System.out.println("addProject-------****end");
		return mv;
	}

	/**
	 * 重新定向到添加项目案例页面
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addProjectTry")
	public ModelAndView tryss(HttpSession session) throws Exception {
		System.out.println("project=====addProjectTry--------starts");
		ModelAndView mv = new ModelAndView();
		// 从DOM工厂中获得DOM解析器
		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		// 把要解析的xml文档读入DOM解析器中
		DocumentBuilder dbBuilder = dbFactory.newDocumentBuilder();
		// Document doc=dbBuilder.parse("src/main/resources/xml/projecttype.xml");
		org.w3c.dom.Document doc = dbBuilder.parse("E:\\myZqkcProject\\code\\cbranch\\src\\main\\resources\\xml/projecttype.xml");
		// 得到文档名称为type的元素的节点列表
		NodeList nList = doc.getElementsByTagName("type");
		// 解析出来的类型存放在list集合里
		List<String> list = new ArrayList<String>();
		for (int i = 0; i < nList.getLength(); i++) {
			Element node = (Element) nList.item(i);// 遍历该集合，显示结合中的元素机器子元素的名字
			String name = node.getTextContent();

			list.add(name);
			mv.addObject("list", list);
		}
		// 以上是解析XML文件得到type类型
		System.out.println("project=====addProjectTry--------end");
		mv.setViewName("projectAdd");
		return mv;
	}

	/**
	 * 删除项目案例
	 * 
	 * @param session
	 * @param id
	 * @return
	 * @throws Exception
	 */

	@RequestMapping("/deleteProject")
	public ModelAndView deleteProjectController(HttpSession session, int id) throws Exception {
		System.out.println("deleteProject*************starts");
		ModelAndView mv = new ModelAndView();
		boolean flag = proService.doDeleteProject(id);
		if (flag) {
			mv.setViewName("redirect:findProjectAll");
		} else {
			mv.addObject("messageDelete", "删除失败！！");
			mv.setViewName("index");
		}
		System.out.println("deleteProject*************starts");
		return mv;
	}

	/**
	 * 批量删除项目案例
	 * 
	 * @param session
	 * @param list
	 * @return
	 * @throws Exception
	 */

	@RequestMapping(value = "/deleteProjectMass", method = RequestMethod.POST)
	public ModelAndView deleteProjectMassController(HttpSession session, String delitems)
			throws Exception {
		System.out.println("deleteProjectMass***********starts");
		String[] ids = delitems.split(",");
		ModelAndView mv = new ModelAndView();
		try {
			boolean flag = proService.doDeleteProjectMass(ids);
			if (flag) {
				mv.setViewName("redirect:findProjectAll");
			} else {
				mv.setViewName("redirect:index");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("deleteProjectMass***********end");
		return mv;
	}

	/**
	 * 更新项目案例
	 * 
	 * @param session
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateProject")
	public ModelAndView updateProjectController(HttpSession session, Project project) throws Exception {
		System.out.println("updateProject!!");
		ModelAndView mv = new ModelAndView();
		System.out.println(project.getId());
		System.out.println(project.getName());
		boolean flag = proService.doUpdateProject(project);
		if (flag) {
			System.out.println("跳到updateProject成功！！");
			mv.addObject("messageUpdate", "修改成功！！");
			mv.setViewName("redirect:findProjectAll");
		} else {
			System.out.println("跳到updateProject失败！！");
			mv.addObject("messageUpdate", "修改失败！！");
			mv.setViewName("projectUpdate");
		}
		return mv;
	}

	/**
	 * 跳转到更新页面
	 * 
	 * @param session
	 * @param project
	 * @return
	 * @throws Exception
	 */

	@RequestMapping(value="/updateProjectTry",produces="text/html;charset=UTF-8")
	public ModelAndView updateProjectTryController(HttpServletRequest req,HttpServletResponse rep, Project project) throws Exception {
		req.setCharacterEncoding("utf-8");
		rep.setCharacterEncoding("utf-8");
		String name=req.getParameter("name");	
		System.out.println("charset====="+name);
//		String id=req.getParameter("id");
//		String isdel=req.getParameter("isdel");
//		String power=req.getParameter("power");		
		String title=req.getParameter("title");
		String type=req.getParameter("type");
		String remark=req.getParameter("remark");
		String url=req.getParameter("url");
		name= new String(name.getBytes("ISO-8859-1"),"utf-8");
		title= new String(title.getBytes("ISO-8859-1"),"utf-8");
		type= new String(type.getBytes("ISO-8859-1"),"utf-8");
		remark= new String(remark.getBytes("ISO-8859-1"),"utf-8");
		url= new String(url.getBytes("ISO-8859-1"),"utf-8");
        System.out.println("updateProjectTryController----------------starts");
		System.out.println("=====1"+name);
		System.out.println("=====2"+title);
		System.out.println("=====3"+type);
		System.out.println("=====4"+title);
		System.out.println("=====5"+remark);
		System.out.println("简介：" +url);
		project.setName(name);
		project.setTitle(title);
		project.setRemark(remark);
		project.setType(type);
		project.setUrl(url);
		System.out.println("project====="+project.getUrl());
		ModelAndView mv = new ModelAndView();
		// 从DOM工厂中获得DOM解析器
		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		// 把要解析的xml文档读入DOM解析器中
		DocumentBuilder dbBuilder = dbFactory.newDocumentBuilder();
		// Document doc=dbBuilder.parse("src/main/resources/xml/projecttype.xml");
		org.w3c.dom.Document doc = dbBuilder.parse("E:\\myZqkcProject\\code\\cbranch\\src/main/resources/xml/projecttype.xml");
		// 得到文档名称为type的元素的节点列表
		NodeList nList = doc.getElementsByTagName("type");
		// 解析出来的类型存放在list集合里
		List<String> list = new ArrayList<String>();
		for (int i = 0; i < nList.getLength(); i++) {
			Element node = (Element) nList.item(i);// 遍历该集合，显示结合中的元素机器子元素的名字
			String sname = node.getTextContent();
			list.add(sname);
			mv.addObject("list", list);
		}
		// 以上是解析XML文件得到type类型

		List<Project> projectList = new ArrayList<Project>();
		projectList.add(project);
		mv.addObject("projectList", projectList);
		mv.setViewName("projectUpdate");
		System.out.println("updateProjectTryController----------------starts");
		return mv;
	}

	/**
	 * 根据ID查询项目案例
	 * 
	 * @param session
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/findProjectById")
	public ModelAndView findProjectByIdController(HttpSession session, int id) throws Exception {
		ModelAndView mv = new ModelAndView();
		Project project = proService.doFindProjectById(id);
		if (null != project) {
			mv.addObject("findResult", "project");
			mv.setViewName("redirect:findProjectAll");
		} else {
			mv.addObject("findError", "查找的结果不存在！！");
			mv.setViewName("返回报错页面");
		}
		return mv;
	}

	/**
	 * 查找所有的项目案例
	 * 
	 * @param session
	 * @param s
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/findProjectAll")
	public ModelAndView findProjetcAll(HttpSession session) throws Exception {
		System.out.println("project=====findProjectAll--------starts");
		ModelAndView mv = new ModelAndView();
		
		List<Project> projectList = proService.doFindProjectAll();
		if (!projectList.isEmpty()) {
			mv.addObject("projectList", projectList);
			mv.setViewName("projectSelect");
		} else {
			mv.addObject("findErrors", "查找的结果不存在！！");
			mv.setViewName("index");
		}
		System.out.println("project=====findProjectAll--------end");
		return mv;

	}

	/**
	 * 重定向到项目案例列表
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/projectSelect")
	public ModelAndView projectSelect(HttpSession session) throws Exception {
		System.out.println("UserController");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("projectSelect");
		return mv;
	}

	/**
	 * 从其他Controller返回首页
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/userBack")
	public ModelAndView userBack(HttpSession session) throws Exception {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("index");
		return mv;
	}

	/**
	 * 重定向返回功能列表
	 * 
	 * @param session
	 * @return
	 */

	@RequestMapping("projectFunctionList")
	public ModelAndView projectFunctionList(HttpSession session) throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("projectFunctionList");
		return mv;
	}

	/**
	 * 给页面进行分页
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("pageable")
	public ModelAndView pageableController(HttpSession session) throws Exception {

		return null;

	}
	
	/**
	 * 添加计划书
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/findProspectusAll")
	@ResponseBody
	public ModelAndView findProjectInformationController(HttpSession session) throws Exception {
		ModelAndView md=new ModelAndView();
		md.setViewName("prospectus_list");
		return md;

	}
	
	/**
	 * 计划书列表
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addProspectus")
	@ResponseBody
	public ModelAndView addProspectusController(HttpSession session) throws Exception {
		System.out.println("addProspectus**************starts");
		ModelAndView md=new ModelAndView();
		List<String> p_list=new ArrayList<>();
		String path="E:\\myZqkcProject\\code\\cbranch\\src\\main\\resources\\xml/prospectus.xml";
		String pathUrl="E:\\myZqkcProject\\code\\cbranch\\src\\main\\resources\\xml/prospectusp.xml";
		u_list=strUtil.analysisUtil(path);
		p_list=strUtil.analysisUtil(pathUrl);
		if(!u_list.isEmpty()&&!p_list.isEmpty()) {
			md.addObject("prospectus_id", u_list);
			md.addObject("prospectus_p_id", p_list);
			md.addObject("message", "加载type成功！");
			md.setViewName("prospectus_add");
		}else {
			md.addObject("message", "加载type失败！");
			md.setViewName("redirect:index");
		}		
		System.out.println("addProspectus**************end");
		return md;

	}
	
}
