package com.zqkc.service.project;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zqkc.bean.ProjectInputForm;
import com.zqkc.bean.ProjectStagesInfo;

@Service
public class ProjectOperService {
	/**
	 * 根据提供的id和输入项目信息查询项目详细信息
	 * 1.根据id查询项目信息
	 * 2.根据输入的项目信息筛选符合条件的项目详细信息
	 * 
	 * @param id
	 * @param projectInputForm
	 * @return
	 */
	public List<ProjectStagesInfo> selectProjectStages(String id,ProjectInputForm projectInputForm){
		
		//1.空校验
		
		//2.资格校验
		
		//3.循环校验
		
		return null;
		}
	
	//字符的空校验
	public boolean checkNull(String str) {
			boolean  flag =true;
		if("".equals(str) || str==null) {
			
		}else {
			flag =false;
		}
		return flag;
		}

	//字符的空校验
		public boolean checkQuality(String str) {
				boolean  flag =true;
			if("".equals(str) || str==null) {
				
			}else {
				flag =false;
			}
			return flag;
			}
}
