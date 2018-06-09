package com.zqkc.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Recruit;
import com.zqkc.service.IRecruitService;

@Controller
@RequestMapping("/recruit")
public class RecruitController {

	@Autowired
	private IRecruitService recruitService; // 通过set注入调用service层的方法

	public void setRecruitService(IRecruitService recruitService) {
		this.recruitService = recruitService;
	}

	@RequestMapping("/addRecruit")
	public ModelAndView addRecruit(HttpSession session, Recruit recruit) throws Exception {
		ModelAndView mv = new ModelAndView();
		boolean flag = recruitService.doAddRecruit(recruit);
		System.out.println("添加进入到控制层！！");
		if (flag) {
			System.out.println("添加进入到成功控制层！！");
			mv.setViewName("redirect:findAllRecruit");
		} else {
			System.out.println("添加进入到失败控制层！！");
			mv.setViewName("recruit_add");
		}
		return mv;

	}

	@RequestMapping("/addRecruit_Menu")
	public ModelAndView addRecruit_Menu(HttpSession session, Recruit recruit) throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("recruit_add");
		return mv;

	}

	@RequestMapping("/deleteRecruit")
	public ModelAndView deleteRecruit(HttpSession session, int id) throws Exception {
		ModelAndView mv = new ModelAndView();
		boolean flag = recruitService.doDeleteRecruit(id);
		if (flag) {
			mv.setViewName("redirect:findAllRecruit");
		} else {
			mv.setViewName("error");
		}
		return mv;
	}

	@RequestMapping(value = "/deleteAllRecruit", method = RequestMethod.POST)
	public ModelAndView deleteAllRecruit(HttpSession session, Recruit recruit, HttpServletRequest req,
			HttpServletResponse resp) throws Exception {
		// 把前端通过js控制的批量删除ids传值给控制器
		String item = req.getParameter("delitems");
		System.out.println(item);
		String[] ids = item.split(",");
		ModelAndView mv = new ModelAndView();
		System.out.println("进入到控制器批量删除里面！！");
		boolean flag = recruitService.doDeleteAllRecruit(ids);
		if (flag) {
			System.out.println("进入到控制器批量删除成功里面！！");
			mv.setViewName("redirect:findAllRecruit");
		} else {
			System.out.println("进入到控制器批量删除失败里面！！");
			mv.setViewName("redirect:index");
		}
		return mv;
	}

	@RequestMapping("/updateRecruit")
	public ModelAndView updateRecruit(HttpSession session, Recruit recruit) throws Exception {
		ModelAndView mv = new ModelAndView();
		System.out.println(recruit.toString());
		recruitService.doUpdateRecruit(recruit);
		System.out.println("111进入到redirect:findAllRecruit");

		mv.addObject("recruit", recruit);
		System.out.println("22进入到redirect:findAllRecruit");
		mv.setViewName("redirect:findAllRecruit");

		return mv;
	}

	@RequestMapping("/findByIdRecruit")
	public ModelAndView findByIdRecruit(HttpSession session, int id) throws Exception {
		ModelAndView mv = new ModelAndView();
		Recruit recruit = recruitService.doFindByIdRecruit(id);
		mv.addObject("recruit", recruit);
		mv.setViewName("recruit_update");

		return mv;
	}

	@RequestMapping("/findAllRecruit")
	public ModelAndView findAllRecruit(HttpSession session) throws Exception {
		ModelAndView mv = new ModelAndView();
		List<Recruit> list = recruitService.doFindAllRecruit();
		if (!list.isEmpty()) {
			mv.addObject("list", list);
			mv.setViewName("recruit_list");
		} else {
			mv.addObject("findAllMessage", "查询所有信息失败！！！");
			mv.setViewName("error");
		}
		return mv;
	}

	@RequestMapping("/recruitAdd")
	public ModelAndView recruitAdd(HttpSession session) throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("recruit_add");
		return mv;
	}

	@RequestMapping("/recruitUpdate")
	public ModelAndView recruitUpdate(HttpSession session) throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("recruit_update");
		return mv;
	}

}
