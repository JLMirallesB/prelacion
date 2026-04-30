const FLOWCHART_STEPS = {
  start: {
    type: 'question',
    questionKey: 'flowQ_context',
    options: [
      { labelKey: 'flowA_newAdmission', next: 'q_studyType', answerKey: 'context', answerValue: 'new' },
      { labelKey: 'flowA_readmission', next: 'q_re_previous', answerKey: 'context', answerValue: 'readmission' },
      { labelKey: 'flowA_transfer', next: 'q_transferType', answerKey: 'context', answerValue: 'transfer' },
      { labelKey: 'flowA_specialtyChange', next: 'q_specialty_age', answerKey: 'context', answerValue: 'specialty' },
      { labelKey: 'flowA_midCourse', next: 'q_mid_ordinary', answerKey: 'context', answerValue: 'midcourse' },
    ]
  },

  // --- New admission ---
  q_studyType: {
    type: 'question',
    questionKey: 'flowQ_studyType',
    options: [
      { labelKey: 'flowA_elementary', next: 'q_age_elem', answerKey: 'studyType', answerValue: 'elementary' },
      { labelKey: 'flowA_professional', next: 'q_age_prof', answerKey: 'studyType', answerValue: 'professional' },
    ]
  },
  q_age_elem: {
    type: 'question',
    questionKey: 'flowQ_ageElem',
    options: [
      { labelKey: 'flowA_under12', next: 'q_elemCourse_u12', answerKey: 'age', answerValue: 'under12' },
      { labelKey: 'flowA_12orOver', next: 'q_elemCourse_o12', answerKey: 'age', answerValue: '12orOver' },
    ]
  },
  q_age_prof: {
    type: 'question',
    questionKey: 'flowQ_ageProf',
    options: [
      { labelKey: 'flowA_under18', next: 'r_prof_u18', answerKey: 'age', answerValue: 'under18' },
      { labelKey: 'flowA_18orOver', next: 'r_prof_o18', answerKey: 'age', answerValue: '18orOver' },
    ]
  },
  q_elemCourse_u12: {
    type: 'question',
    questionKey: 'flowQ_elemCourse',
    options: [
      { labelKey: 'flowA_firstCourseMusic', next: 'r_elem_1stM_u12', answerKey: 'course', answerValue: '1stMusic' },
      { labelKey: 'flowA_otherCourse', next: 'r_elem_other_u12', answerKey: 'course', answerValue: 'other' },
    ]
  },
  q_elemCourse_o12: {
    type: 'question',
    questionKey: 'flowQ_elemCourse',
    options: [
      { labelKey: 'flowA_firstCourseMusic', next: 'r_elem_1stM_o12', answerKey: 'course', answerValue: '1stMusic' },
      { labelKey: 'flowA_otherCourse', next: 'r_elem_other_o12', answerKey: 'course', answerValue: 'other' },
    ]
  },

  // Results: new admission
  r_prof_u18: {
    type: 'result', level: 1, prelacion: 2,
    phaseKey: 'result_firstAdj',
    explanationKey: 'result_explain_newAdmission',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_prof_o18: {
    type: 'result', level: 3, prelacion: 2,
    phaseKey: 'result_phase3',
    explanationKey: 'result_explain_newAdmission',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_elem_1stM_u12: {
    type: 'result', level: 2, prelacion: 2,
    phaseKey: 'result_firstAdj_phase2',
    explanationKey: 'result_explain_newAdmission_1stMusic_under12',
    ordering: ['ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_elem_1stM_o12: {
    type: 'result', level: 4, prelacion: 2,
    phaseKey: 'result_phase3',
    explanationKey: 'result_explain_newAdmission_1stMusic_over12',
    ordering: ['ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_elem_other_u12: {
    type: 'result', level: 2, prelacion: 2,
    phaseKey: 'result_firstAdj',
    explanationKey: 'result_explain_newAdmission',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_elem_other_o12: {
    type: 'result', level: 4, prelacion: 2,
    phaseKey: 'result_phase3',
    explanationKey: 'result_explain_newAdmission',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },

  // --- Readmission ---
  q_re_previous: {
    type: 'question',
    questionKey: 'flowQ_rePrevious',
    options: [
      { labelKey: 'flowA_reNo', next: 'q_studyType_re', answerKey: 'rePrevious', answerValue: 'no' },
      { labelKey: 'flowA_reYes', next: 'r_re_blocked', answerKey: 'rePrevious', answerValue: 'yes' },
    ]
  },
  r_re_blocked: {
    type: 'result',
    phaseKey: 'result_re_blocked',
    explanationKey: 'result_explain_re_blocked',
    ordering: [],
  },
  q_studyType_re: {
    type: 'question',
    questionKey: 'flowQ_studyType',
    options: [
      { labelKey: 'flowA_elementary', next: 'q_age_elem_re', answerKey: 'studyType', answerValue: 'elementary' },
      { labelKey: 'flowA_professional', next: 'q_age_prof_re', answerKey: 'studyType', answerValue: 'professional' },
    ]
  },
  q_age_elem_re: {
    type: 'question',
    questionKey: 'flowQ_ageElem',
    options: [
      { labelKey: 'flowA_under12', next: 'q_center_re_l2', answerKey: 'age', answerValue: 'under12' },
      { labelKey: 'flowA_12orOver', next: 'q_center_re_l4', answerKey: 'age', answerValue: '12orOver' },
    ]
  },
  q_age_prof_re: {
    type: 'question',
    questionKey: 'flowQ_ageProf',
    options: [
      { labelKey: 'flowA_under18', next: 'q_center_re_l1', answerKey: 'age', answerValue: 'under18' },
      { labelKey: 'flowA_18orOver', next: 'q_center_re_l3', answerKey: 'age', answerValue: '18orOver' },
    ]
  },
  q_center_re_l1: {
    type: 'question', questionKey: 'flowQ_readmissionCenter',
    options: [
      { labelKey: 'flowA_sameCenter', next: 'r_re_same_l1', answerKey: 'center', answerValue: 'same' },
      { labelKey: 'flowA_otherCenter', next: 'r_re_other_l1', answerKey: 'center', answerValue: 'otherCenter' },
    ]
  },
  q_center_re_l2: {
    type: 'question', questionKey: 'flowQ_readmissionCenter',
    options: [
      { labelKey: 'flowA_sameCenter', next: 'r_re_same_l2', answerKey: 'center', answerValue: 'same' },
      { labelKey: 'flowA_otherCenter', next: 'r_re_other_l2', answerKey: 'center', answerValue: 'otherCenter' },
    ]
  },
  q_center_re_l3: {
    type: 'question', questionKey: 'flowQ_readmissionCenter',
    options: [
      { labelKey: 'flowA_sameCenter', next: 'r_re_same_l3', answerKey: 'center', answerValue: 'same' },
      { labelKey: 'flowA_otherCenter', next: 'r_re_other_l3', answerKey: 'center', answerValue: 'otherCenter' },
    ]
  },
  q_center_re_l4: {
    type: 'question', questionKey: 'flowQ_readmissionCenter',
    options: [
      { labelKey: 'flowA_sameCenter', next: 'r_re_same_l4', answerKey: 'center', answerValue: 'same' },
      { labelKey: 'flowA_otherCenter', next: 'r_re_other_l4', answerKey: 'center', answerValue: 'otherCenter' },
    ]
  },

  // Results: readmission same center (1st adj, prelacion 1)
  r_re_same_l1: {
    type: 'result', level: 1, prelacion: 1,
    phaseKey: 'result_firstAdj',
    explanationKey: 'result_explain_readmission_same',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_re_same_l2: {
    type: 'result', level: 2, prelacion: 1,
    phaseKey: 'result_firstAdj',
    explanationKey: 'result_explain_readmission_same',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_re_same_l3: {
    type: 'result', level: 3, prelacion: 1,
    phaseKey: 'result_phase3',
    explanationKey: 'result_explain_readmission_same',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_re_same_l4: {
    type: 'result', level: 4, prelacion: 1,
    phaseKey: 'result_phase3',
    explanationKey: 'result_explain_readmission_same',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },

  // Results: readmission other center (2nd adj, prelacion 2 of art. 21)
  r_re_other_l1: {
    type: 'result', level: 1, secondAdjPrelacion: 2,
    phaseKey: 'result_secondAdj',
    prelacionKey: 'result_secondAdj_pre2',
    explanationKey: 'result_explain_readmission_other',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_re_other_l2: {
    type: 'result', level: 2, secondAdjPrelacion: 2,
    phaseKey: 'result_secondAdj',
    prelacionKey: 'result_secondAdj_pre2',
    explanationKey: 'result_explain_readmission_other',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_re_other_l3: {
    type: 'result', level: 3, secondAdjPrelacion: 2,
    phaseKey: 'result_secondAdj',
    prelacionKey: 'result_secondAdj_pre2',
    explanationKey: 'result_explain_readmission_other',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_re_other_l4: {
    type: 'result', level: 4, secondAdjPrelacion: 2,
    phaseKey: 'result_secondAdj',
    prelacionKey: 'result_secondAdj_pre2',
    explanationKey: 'result_explain_readmission_other',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },

  // --- Transfer ---
  q_transferType: {
    type: 'question',
    questionKey: 'flowQ_transferType',
    options: [
      { labelKey: 'flowA_transferDuringAdmission', next: 'q_studyType_tr', answerKey: 'transferType', answerValue: 'admission' },
      { labelKey: 'flowA_transferDuringCourse', next: 'q_studyType_tr_c', answerKey: 'transferType', answerValue: 'duringCourse' },
    ]
  },
  q_studyType_tr: {
    type: 'question',
    questionKey: 'flowQ_studyType',
    options: [
      { labelKey: 'flowA_elementary', next: 'q_age_elem_tr', answerKey: 'studyType', answerValue: 'elementary' },
      { labelKey: 'flowA_professional', next: 'q_age_prof_tr', answerKey: 'studyType', answerValue: 'professional' },
    ]
  },
  q_age_elem_tr: {
    type: 'question', questionKey: 'flowQ_ageElem',
    options: [
      { labelKey: 'flowA_under12', next: 'r_tr_adm_l2', answerKey: 'age', answerValue: 'under12' },
      { labelKey: 'flowA_12orOver', next: 'r_tr_adm_l4', answerKey: 'age', answerValue: '12orOver' },
    ]
  },
  q_age_prof_tr: {
    type: 'question', questionKey: 'flowQ_ageProf',
    options: [
      { labelKey: 'flowA_under18', next: 'r_tr_adm_l1', answerKey: 'age', answerValue: 'under18' },
      { labelKey: 'flowA_18orOver', next: 'r_tr_adm_l3', answerKey: 'age', answerValue: '18orOver' },
    ]
  },

  // Results: transfer during admission (2nd adj, prelacion 1 of art. 21)
  r_tr_adm_l1: {
    type: 'result', level: 1, secondAdjPrelacion: 1,
    phaseKey: 'result_secondAdj',
    prelacionKey: 'result_secondAdj_pre1',
    explanationKey: 'result_explain_transfer_admission',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_tr_adm_l2: {
    type: 'result', level: 2, secondAdjPrelacion: 1,
    phaseKey: 'result_secondAdj',
    prelacionKey: 'result_secondAdj_pre1',
    explanationKey: 'result_explain_transfer_admission',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_tr_adm_l3: {
    type: 'result', level: 3, secondAdjPrelacion: 1,
    phaseKey: 'result_secondAdj',
    prelacionKey: 'result_secondAdj_pre1',
    explanationKey: 'result_explain_transfer_admission',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_tr_adm_l4: {
    type: 'result', level: 4, secondAdjPrelacion: 1,
    phaseKey: 'result_secondAdj',
    prelacionKey: 'result_secondAdj_pre1',
    explanationKey: 'result_explain_transfer_admission',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },

  // Transfer during course: study type + age → level-specific results
  q_studyType_tr_c: {
    type: 'question', questionKey: 'flowQ_studyType',
    options: [
      { labelKey: 'flowA_elementary', next: 'q_age_elem_tr_c', answerKey: 'studyType', answerValue: 'elementary' },
      { labelKey: 'flowA_professional', next: 'q_age_prof_tr_c', answerKey: 'studyType', answerValue: 'professional' },
    ]
  },
  q_age_elem_tr_c: {
    type: 'question', questionKey: 'flowQ_ageElem',
    options: [
      { labelKey: 'flowA_under12', next: 'r_tr_c_l2', answerKey: 'age', answerValue: 'under12' },
      { labelKey: 'flowA_12orOver', next: 'r_tr_c_l4', answerKey: 'age', answerValue: '12orOver' },
    ]
  },
  q_age_prof_tr_c: {
    type: 'question', questionKey: 'flowQ_ageProf',
    options: [
      { labelKey: 'flowA_under18', next: 'r_tr_c_l1', answerKey: 'age', answerValue: 'under18' },
      { labelKey: 'flowA_18orOver', next: 'r_tr_c_l3', answerKey: 'age', answerValue: '18orOver' },
    ]
  },
  r_tr_c_l1: {
    type: 'result', level: 1,
    phaseKey: 'result_art22b',
    explanationKey: 'result_explain_transfer_course',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_tr_c_l2: {
    type: 'result', level: 2,
    phaseKey: 'result_art22b',
    explanationKey: 'result_explain_transfer_course',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_tr_c_l3: {
    type: 'result', level: 3,
    phaseKey: 'result_art22b',
    explanationKey: 'result_explain_transfer_course',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_tr_c_l4: {
    type: 'result', level: 4,
    phaseKey: 'result_art22b',
    explanationKey: 'result_explain_transfer_course',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },

  // --- Specialty change ---
  q_specialty_age: {
    type: 'info_question',
    infoKey: 'flowInfo_specialtyChange',
    questionKey: 'flowQ_ageElem',
    options: [
      { labelKey: 'flowA_under12', next: 'r_spec_l2', answerKey: 'age', answerValue: 'under12' },
      { labelKey: 'flowA_12orOver', next: 'r_spec_l4', answerKey: 'age', answerValue: '12orOver' },
    ]
  },
  r_spec_l2: {
    type: 'result', level: 2, prelacion: 3,
    phaseKey: 'result_firstAdj',
    explanationKey: 'result_explain_specialty_change',
    ordering: ['ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_spec_l4: {
    type: 'result', level: 4, prelacion: 3,
    phaseKey: 'result_phase3',
    explanationKey: 'result_explain_specialty_change',
    ordering: ['ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },

  // --- Mid-course vacancies ---
  q_mid_ordinary: {
    type: 'question',
    questionKey: 'flowQ_midOrdinary',
    options: [
      { labelKey: 'flowA_midYes', next: 'q_midCourseType', answerKey: 'midOrdinary', answerValue: 'yes' },
      { labelKey: 'flowA_midNo', next: 'r_mid_not_yet', answerKey: 'midOrdinary', answerValue: 'no' },
    ]
  },
  r_mid_not_yet: {
    type: 'result',
    phaseKey: 'result_mid_not_yet',
    explanationKey: 'result_explain_mid_not_yet',
    ordering: [],
  },
  q_midCourseType: {
    type: 'question',
    questionKey: 'flowQ_midCourseType',
    options: [
      { labelKey: 'flowA_examSameCenter', next: 'q_studyType_mid_s', answerKey: 'midCourseType', answerValue: 'sameCenter' },
      { labelKey: 'flowA_examOtherCenter', next: 'q_studyType_mid_o', answerKey: 'midCourseType', answerValue: 'otherCenter' },
      { labelKey: 'flowA_transferMidCourse', next: 'q_studyType_tr_c', answerKey: 'midCourseType', answerValue: 'transfer' },
    ]
  },
  // Mid-course same center: study type + age → level-specific results
  q_studyType_mid_s: {
    type: 'question', questionKey: 'flowQ_studyType',
    options: [
      { labelKey: 'flowA_elementary', next: 'q_age_elem_mid_s', answerKey: 'studyType', answerValue: 'elementary' },
      { labelKey: 'flowA_professional', next: 'q_age_prof_mid_s', answerKey: 'studyType', answerValue: 'professional' },
    ]
  },
  q_age_elem_mid_s: {
    type: 'question', questionKey: 'flowQ_ageElem',
    options: [
      { labelKey: 'flowA_under12', next: 'r_mid_s_l2', answerKey: 'age', answerValue: 'under12' },
      { labelKey: 'flowA_12orOver', next: 'r_mid_s_l4', answerKey: 'age', answerValue: '12orOver' },
    ]
  },
  q_age_prof_mid_s: {
    type: 'question', questionKey: 'flowQ_ageProf',
    options: [
      { labelKey: 'flowA_under18', next: 'r_mid_s_l1', answerKey: 'age', answerValue: 'under18' },
      { labelKey: 'flowA_18orOver', next: 'r_mid_s_l3', answerKey: 'age', answerValue: '18orOver' },
    ]
  },
  r_mid_s_l1: {
    type: 'result', level: 1,
    phaseKey: 'result_art22a',
    explanationKey: 'result_explain_midcourse_same',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_mid_s_l2: {
    type: 'result', level: 2,
    phaseKey: 'result_art22a',
    explanationKey: 'result_explain_midcourse_same',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_mid_s_l3: {
    type: 'result', level: 3,
    phaseKey: 'result_art22a',
    explanationKey: 'result_explain_midcourse_same',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_mid_s_l4: {
    type: 'result', level: 4,
    phaseKey: 'result_art22a',
    explanationKey: 'result_explain_midcourse_same',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },

  // Mid-course other center: study type + age → level-specific results
  q_studyType_mid_o: {
    type: 'question', questionKey: 'flowQ_studyType',
    options: [
      { labelKey: 'flowA_elementary', next: 'q_age_elem_mid_o', answerKey: 'studyType', answerValue: 'elementary' },
      { labelKey: 'flowA_professional', next: 'q_age_prof_mid_o', answerKey: 'studyType', answerValue: 'professional' },
    ]
  },
  q_age_elem_mid_o: {
    type: 'question', questionKey: 'flowQ_ageElem',
    options: [
      { labelKey: 'flowA_under12', next: 'r_mid_o_l2', answerKey: 'age', answerValue: 'under12' },
      { labelKey: 'flowA_12orOver', next: 'r_mid_o_l4', answerKey: 'age', answerValue: '12orOver' },
    ]
  },
  q_age_prof_mid_o: {
    type: 'question', questionKey: 'flowQ_ageProf',
    options: [
      { labelKey: 'flowA_under18', next: 'r_mid_o_l1', answerKey: 'age', answerValue: 'under18' },
      { labelKey: 'flowA_18orOver', next: 'r_mid_o_l3', answerKey: 'age', answerValue: '18orOver' },
    ]
  },
  r_mid_o_l1: {
    type: 'result', level: 1,
    phaseKey: 'result_art22c',
    explanationKey: 'result_explain_midcourse_other',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_mid_o_l2: {
    type: 'result', level: 2,
    phaseKey: 'result_art22c',
    explanationKey: 'result_explain_midcourse_other',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_mid_o_l3: {
    type: 'result', level: 3,
    phaseKey: 'result_art22c',
    explanationKey: 'result_explain_midcourse_other',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
  r_mid_o_l4: {
    type: 'result', level: 4,
    phaseKey: 'result_art22c',
    explanationKey: 'result_explain_midcourse_other',
    ordering: ['ordering_course', 'ordering_grade', 'ordering_birth', 'ordering_lottery'],
  },
};

const TIMELINE_POSITIONS = [
  'tl_pos_adj1_f1_l1', 'tl_pos_adj1_f1_l2', 'tl_pos_adj1_f2',
  'tl_pos_adj1_f3_l3', 'tl_pos_adj1_f3_l4',
  'tl_pos_adj2_l1', 'tl_pos_adj2_l2', 'tl_pos_adj2_l3', 'tl_pos_adj2_l4',
  'tl_pos_extra',
  'tl_pos_mid_a', 'tl_pos_mid_b', 'tl_pos_mid_c',
];

const PHASE_LEVEL_TO_POS = {
  'result_firstAdj:1': 0, 'result_firstAdj:2': 1,
  'result_firstAdj_phase2:2': 2,
  'result_phase3:3': 3, 'result_phase3:4': 4,
  'result_secondAdj:1': 5, 'result_secondAdj:2': 6, 'result_secondAdj:3': 7, 'result_secondAdj:4': 8,
  'result_art22a:1': 10, 'result_art22a:2': 10, 'result_art22a:3': 10, 'result_art22a:4': 10,
  'result_art22b:1': 11, 'result_art22b:2': 11, 'result_art22b:3': 11, 'result_art22b:4': 11,
  'result_art22c:1': 12, 'result_art22c:2': 12, 'result_art22c:3': 12, 'result_art22c:4': 12,
};

const ANSWER_LABELS = {
  context: 'label_context',
  studyType: 'label_studyType',
  age: 'label_age',
  course: 'label_course',
  center: 'label_center',
  transferType: 'label_transferType',
  midCourseType: 'label_midCourseType',
};

const ANSWER_VALUES = {
  context: { new: 'val_new', readmission: 'val_readmission', transfer: 'val_transfer', specialty: 'val_specialty', midcourse: 'val_midcourse' },
  studyType: { elementary: 'val_elementary', professional: 'val_professional' },
  age: { under12: 'val_under12', '12orOver': 'val_12orOver', under18: 'val_under18', '18orOver': 'val_18orOver' },
  course: { '1stMusic': 'val_1stMusic', '1stDance': 'val_1stDance', other: 'val_other' },
  center: { same: 'val_same', otherCenter: 'val_otherCenter' },
  transferType: { admission: 'val_admission', duringCourse: 'val_duringCourse' },
  midCourseType: { sameCenter: 'val_sameCenter', otherCenter: 'val_otherCenterWait', transfer: 'val_transferWait' },
};

const ALL_SCHEMA_SECTIONS = [
  's_adj1', 's_adj1_f1', 's_adj1_f1_l1', 's_adj1_f1_l2',
  's_adj1_f2', 's_adj1_f3', 's_adj1_f3_l3', 's_adj1_f3_l4',
  's_adj2', 's_adj2_l1', 's_adj2_l2', 's_adj2_l3', 's_adj2_l4',
  's_extra', 's_extra_l1', 's_extra_l2', 's_extra_l3', 's_extra_l4',
  's_mid',
];

const ANSWER_ORDER = ['context', 'rePrevious', 'studyType', 'age', 'course', 'center', 'transferType', 'midOrdinary', 'midCourseType'];

document.addEventListener('alpine:init', () => {
  Alpine.store('app', {
    lang: localStorage.getItem('prelacion-lang') || 'es',
    theme: localStorage.getItem('prelacion-theme') || 'light',
    view: 'schema',
    expanded: {},
    flow: {
      step: 'start',
      answers: {},
      history: [],
    },
    shareCopied: false,
    calcCopied: false,
    calc: {
      year: new Date().getFullYear() + 1,
      birth: '',
      type: 'elementary',
    },

    init() {
      document.documentElement.lang = this.lang;
      document.documentElement.setAttribute('data-theme', this.theme);
      this._replayFromUrl();
    },

    t(key) {
      return (window.I18N[this.lang] && window.I18N[this.lang][key]) || key;
    },

    toggleLang() {
      this.lang = this.lang === 'es' ? 'va' : 'es';
      document.documentElement.lang = this.lang;
      localStorage.setItem('prelacion-lang', this.lang);
    },

    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('prelacion-theme', this.theme);
    },

    setView(v) {
      this.view = v;
      if (v === 'flowchart') this.flowRestart();
    },

    toggle(id) {
      this.expanded[id] = !this.expanded[id];
    },

    isExpanded(id) {
      return !!this.expanded[id];
    },

    expandAll() {
      ALL_SCHEMA_SECTIONS.forEach(id => { this.expanded[id] = true; });
    },

    collapseAll() {
      this.expanded = {};
    },

    get currentStep() {
      return FLOWCHART_STEPS[this.flow.step];
    },

    flowGoTo(stepId, answerKey, answerValue) {
      if (answerKey) this.flow.answers[answerKey] = answerValue;
      this.flow.history.push(this.flow.step);
      this.flow.step = stepId;
      this._focusFlow();
    },

    flowBack() {
      if (this.flow.history.length > 0) {
        const prev = this.flow.history.pop();
        const prevStep = FLOWCHART_STEPS[prev];
        if (prevStep && prevStep.options && prevStep.options.length > 0) {
          const key = prevStep.options[0].answerKey;
          if (key) delete this.flow.answers[key];
        }
        this.flow.step = prev;
        this._focusFlow();
      }
    },

    flowRestart() {
      this.flow.step = 'start';
      this.flow.answers = {};
      this.flow.history = [];
      this._focusFlow();
    },

    _focusFlow() {
      setTimeout(() => {
        const el = document.querySelector('.flow-question[tabindex], .result-header[tabindex]');
        if (el) el.focus({ preventScroll: false });
      }, 120);
    },

    get isResult() {
      return this.currentStep && this.currentStep.type === 'result';
    },

    get resultLevelKey() {
      const s = this.currentStep;
      if (!s || !s.level) return '';
      return 'result_level' + s.level;
    },

    get resultPrelacionKey() {
      const s = this.currentStep;
      if (!s) return '';
      if (s.prelacionKey) return s.prelacionKey;
      if (s.prelacion) return 'result_prelacion' + s.prelacion;
      return '';
    },

    timelinePositions: TIMELINE_POSITIONS,

    get timelinePosition() {
      const s = this.currentStep;
      if (!s || s.type !== 'result' || !s.phaseKey) return -1;
      const key = s.phaseKey + ':' + (s.level || '');
      if (key in PHASE_LEVEL_TO_POS) return PHASE_LEVEL_TO_POS[key];
      return -1;
    },

    get answersList() {
      const list = [];
      ANSWER_ORDER.forEach(key => {
        if (this.flow.answers[key] !== undefined) {
          const labelKey = ANSWER_LABELS[key];
          const valMap = ANSWER_VALUES[key];
          const valKey = valMap ? valMap[this.flow.answers[key]] : this.flow.answers[key];
          if (labelKey && valKey) list.push({ labelKey, valKey });
        }
      });
      return list;
    },

    get calcAge() {
      if (!this.calc.birth || !this.calc.year) return null;
      return this.calc.year - this.calc.birth;
    },

    get calcResult() {
      const age = this.calcAge;
      if (age === null) return null;
      const isEE = this.calc.type === 'elementary';
      if (isEE) {
        if (age < 7) return { status: 'too_young' };
        if (age === 7) return { status: 'exception', level: 2 };
        if (age < 12) return { status: 'ok', level: 2 };
        return { status: 'ok', level: 4 };
      }
      if (age < 18) return { status: 'ok', level: 1 };
      return { status: 'ok', level: 3 };
    },

    get calcShareUrl() {
      const url = new URL(window.location.href.split('?')[0]);
      url.searchParams.set('calc', this.calc.year + ',' + this.calc.birth + ',' + this.calc.type);
      return url.toString();
    },

    copyCalcUrl() {
      navigator.clipboard.writeText(this.calcShareUrl).then(() => {
        this.calcCopied = true;
        setTimeout(() => { this.calcCopied = false; }, 2000);
      });
    },

    get shareUrl() {
      const pairs = [];
      ANSWER_ORDER.forEach(key => {
        if (this.flow.answers[key]) pairs.push(key + ':' + this.flow.answers[key]);
      });
      const url = new URL(window.location.href.split('?')[0]);
      if (pairs.length) url.searchParams.set('answers', pairs.join(','));
      return url.toString();
    },

    copyShareUrl() {
      navigator.clipboard.writeText(this.shareUrl).then(() => {
        this.shareCopied = true;
        setTimeout(() => { this.shareCopied = false; }, 2000);
      });
    },

    _replayFromUrl() {
      const params = new URLSearchParams(window.location.search);

      const calcStr = params.get('calc');
      if (calcStr) {
        const parts = calcStr.split(',');
        if (parts.length === 3) {
          this.calc.year = parseInt(parts[0]) || this.calc.year;
          this.calc.birth = parseInt(parts[1]) || '';
          this.calc.type = parts[2] === 'professional' ? 'professional' : 'elementary';
          this.view = 'age';
          return;
        }
      }

      const answersStr = params.get('answers');
      if (!answersStr) return;

      const answers = {};
      answersStr.split(',').forEach(pair => {
        const sep = pair.indexOf(':');
        if (sep > 0) answers[pair.slice(0, sep)] = pair.slice(sep + 1);
      });

      this.view = 'flowchart';
      this.flow.step = 'start';
      this.flow.answers = {};
      this.flow.history = [];

      let safety = 0;
      while (safety < 30) {
        safety++;
        const step = FLOWCHART_STEPS[this.flow.step];
        if (!step || step.type === 'result' || !step.options) break;
        const answerKey = step.options[0].answerKey;
        const answerValue = answers[answerKey];
        if (!answerValue) break;
        const opt = step.options.find(o => o.answerValue === answerValue);
        if (!opt) break;
        this.flow.history.push(this.flow.step);
        this.flow.answers[answerKey] = answerValue;
        this.flow.step = opt.next;
      }
    },
  });
});

if (new URLSearchParams(window.location.search).get('modo') === 'presentacion') {
  document.body.classList.add('presentation');
}
