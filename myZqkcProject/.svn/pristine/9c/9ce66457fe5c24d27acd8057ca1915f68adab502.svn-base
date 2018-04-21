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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


import com.zqkc.model.Project;
import com.zqkc.service.IProjectService;

@Controller
@RequestMapping("/project")
public class ProjectController {
	
	
	@Autowired
	private IProjectService proService;
	public void setProjectService(IProjectService proService) {
		this.proService = proService;
	}
	/**
	 * 添加项目案例处理
	 * @param session
	 * @param project
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping("/addProject")	
	public ModelAndView addProjectController(HttpSession session,Project project) throws Exception{

		ModelAndView mv=new ModelAndView();	
		System.out.println("进到这里来了！！");
		
		boolean flag=proService.doAddProject(project);
		if(flag){						
			mv.addObject("messageAdd","添加成功！！");
			mv.setViewName("index");

		}else{			
			mv.addObject("messageAdd","添加失败！！");
			mv.setViewName("projectAdd");
		}
		return mv;		
	}
	/**
	 * 重新定向到添加项目案例页面
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addProjectTry")
	public ModelAndView tryss(HttpSession session) throws Exception{
		System.out.println("UserController");
		ModelAndView mv=new ModelAndView();
		//从DOM工厂中获得DOM解析器
				DocumentBuilderFactory dbFactory= DocumentBuilderFactory.newInstance();
				//把要解析的xml文档读入DOM解析器中
				DocumentBuilder dbBuilder=dbFactory.newDocumentBuilder();	
				//Document doc=dbBuilder.parse("src/main/resources/xml/projecttype.xml");
				 org.w3c.dom.Document doc = dbBuilder.parse("src/main/resources/xml/projecttype.xml");
				//得到文档名称为type的元素的节点列表
				NodeList nList=doc.getElementsByTagName("type");
				//解析出来的类型存放在list集合里
				List<String> list=new ArrayList<String>();
				for(int i=0;i<nList.getLength();i++){
					Element node=(Element) nList.item(i);//遍历该集合，显示结合中的元素机器子元素的名字
					String  name=node.getTextContent();
					System.out.println("typeName:"+name);
					list.add(name);
					mv.addObject("list",list);
				}
				//以上是解析XML文件得到type类型
		mv.setViewName("projectAdd");
		return mv;
	}
	/**
	 * 删除项目案例
	 * @param session
	 * @param id
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping("/deleteProject")	
	public ModelAndView deleteProjectController(HttpSession session,int id) throws Exception{
		ModelAndView mv= new ModelAndView();
	//	ProjectService proService= new ProjectService();
		boolean flag=proService.doDeleteProject(id);
		if(flag){
			//mv.addObject("messageDelete","删除成功！！");
			mv.setViewName("redirect:findProjectAll");
		}else{
			mv.addObject("messageDelete","删除失败！！");
			mv.setViewName("index");
		}
		return mv;		
	}
	
	/**
	 * 批量删除项目案例
	 * @param session
	 * @param list
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping(value="/deleteProjectMass",method=RequestMethod.POST)
	
	public ModelAndView deleteProjectMassController(HttpSession session,HttpServletRequest req,HttpServletResponse reps) throws Exception{
		System.out.println("deleteMore");
		String item=req.getParameter("delitems");
		String[] ids = item.split(",");
		ModelAndView mv= new ModelAndView();
		try {
			boolean flag=proService.doDeleteProjectMass(ids);
			if(flag){
				System.out.println("批量删除成功！！");				
				mv.setViewName("redirect:findProjectAll");
			}else{
				mv.setViewName("redirect:index");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	/**
	 * 更新项目案例
	 * @param session
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateProject")	
	public ModelAndView updateProjectController(HttpSession session,Project project) throws Exception{
		System.out.println("updateProject!!");
		ModelAndView mv= new ModelAndView();
	//	ProjectService proService= new ProjectService();
		boolean flag = proService.doUpdateProject(project);
		if(flag){
			mv.addObject("messageUpdate","修改成功！！");
			mv.setViewName("projectUpdate");
		}else{
			mv.addObject("messageUpdate","修改失败！！");
			mv.setViewName("index");
		}
		return mv;		
	}
		
	/**
	 * 根据ID查询项目案例
	 * @param session
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/findProjectById")
	public ModelAndView findProjectByIdController(HttpSession session,int id) throws Exception{
		
		ModelAndView mv= new ModelAndView();
	//	ProjectService proService= new ProjectService();
		Project project=proService.doFindProjectById(id);
		if(null!=project){
			mv.addObject("findResult", "project");
			mv.setViewName("//要返回的页面");
		}
		else{
			mv.addObject("findError", "查找的结果不存在！！");
			mv.setViewName("返回报错页面");
		}
		return mv;	
	}

	/**
	 * 查找所有的项目案例
	 * @param session
	 * @param s
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/findProjectAll")
	public ModelAndView findProjetcAll(HttpSession session) throws Exception{
		ModelAndView mv= new ModelAndView();
	//	ProjectService proService= new ProjectService();
		List<Project> projectList=proService.doFindProjectAll();
		if(!projectList.isEmpty()){
			mv.addObject("projectList", projectList);
			mv.setViewName("projectSelect");
		}else{
			mv.addObject("findErrors", "查找的结果不存在！！");
			mv.setViewName("prokectSelect");
		}
		return mv;
		
	}
	
	/**
	 *重定向到项目案例列表
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/projectSelect")
	public ModelAndView projectSelect(HttpSession session) throws Exception{
		System.out.println("UserController");
		ModelAndView mv=new ModelAndView();
		mv.setViewName("projectSelect");
		return mv;
	
	}
	/**
	 * 从其他Controller返回首页
	 * @param session
	 * @return
	 * @throws Exception
	 */
 @RequestMapping("/userBack")
 public ModelAndView userBack(HttpSession session) throws Exception{
	 
	 ModelAndView mv= new ModelAndView();
	 mv.setViewName("index");
	 return mv;
	 
	
	 
 }

 /**
  * 重定向返回功能列表
  * @param session
  * @return
  */
 
@RequestMapping("projectFunctionList")
public ModelAndView projectFunctionList(HttpSession session) throws Exception{
	
	ModelAndView mv= new ModelAndView();
	mv.setViewName("projectFunctionList");
	return mv;
}

}
