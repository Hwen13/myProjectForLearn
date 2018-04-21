package com.zqkc.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public ModelAndView addRecruit(HttpSession session, Recruit recruit)
			throws Exception {
		ModelAndView mv = new ModelAndView();
		boolean flag = recruitService.doAddRecruit(recruit);
		if (flag) {
			mv.addObject("addMessage", "信息添加成功。");
			mv.setViewName("recruit_list");
		} else {
			mv.addObject("addMessage", "信息添加失败！！！");
			mv.setViewName("recruit_add");
		}
		return mv;

	}

	@RequestMapping("/deleteRecruit")
	public ModelAndView deleteRecruit(HttpSession session, int id)
			throws Exception {
		ModelAndView mv = new ModelAndView();
		boolean flag = recruitService.doDeleteRecruit(id);
		if (flag) {
			mv.addObject("deleteMessage", "删除信息成功。");
			mv.setViewName("recruit_list");
		} else {
			mv.addObject("deleteMessage", "删除信息失败！！！");
			mv.setViewName("error");
		}
		return mv;
	}
    @RequestMapping("/deleteAllRecruit")
	public ModelAndView deleteAllRecruit(HttpSession session, Recruit recruit)
			throws Exception {
		ModelAndView mv = new ModelAndView();
		boolean flag = recruitService.doDeleteAllRecruit(recruit);
		if (flag) {
			mv.addObject("deleteAllMessage", "删除所有信息成功。");
			mv.setViewName("recruit_list");
		} else {
			mv.addObject("deleteAllMessage", "删除所有信息失败！！！");
			mv.setViewName("error");
		}
		return mv;
	}
    @RequestMapping("/updateRecruit")
    public ModelAndView updateRecruit(HttpSession session,Recruit recruit)throws Exception{
    	ModelAndView mv =new ModelAndView();
    	boolean flag =recruitService.doUpdateRecruit(recruit);
    	if(flag){
    		mv.addObject("updateMessage", "修改信息成功。");
			mv.setViewName("recruit_update");
    	}else{
    		mv.addObject("updateMessage", "修改信息失败！！！");
			mv.setViewName("error");
    	}
    	return mv;
    }
    @RequestMapping("/findByIdRecruit")
    public ModelAndView findByIdRecruit(HttpSession session, int id)throws Exception{
    	ModelAndView mv =new ModelAndView();
    	Recruit rec =new Recruit();
    	rec =recruitService.doFindByIdRecruit(id);
    	if(rec !=null){
    		mv.addObject("findMessage", "查询信息成功。");
			mv.setViewName("recruit_list");	
    	}else{
    		mv.addObject("findMessage", "查询信息失败！！！");
			mv.setViewName("error");
    	}
    	
    	return mv;
    }
	@RequestMapping("/findAllRecruit")
	public ModelAndView findAllRecruit (HttpSession session) throws Exception{
		ModelAndView mv =new ModelAndView();
		List<Recruit> list =recruitService.doFindAllRecruit();
		if(!list.isEmpty()){
			System.out.println("进到recruit_list页面！！");
			mv.addObject("list", list);
			mv.setViewName("recruit_list");	
		}else{
			mv.addObject("findAllMessage", "查询所有信息失败！！！");
			mv.setViewName("error");	
		}
		return mv;
	}
	@RequestMapping("/recruitAdd")
	public ModelAndView recruitAdd(HttpSession session)throws Exception{
		ModelAndView mv =new ModelAndView();
		mv.setViewName("recruit_add");
		return mv;
	}
	@RequestMapping("/recruitUpdate")
	public ModelAndView recruitUpdate(HttpSession session)throws Exception{
		ModelAndView mv =new ModelAndView();
		mv.setViewName("recruit_update");
		return mv;
	}
	@RequestMapping("recruitList")
	public ModelAndView recruitList(HttpSession session)throws Exception{
		ModelAndView mv =new ModelAndView();
		mv.setViewName("recruit_list");
		return mv;
	}

	
}
